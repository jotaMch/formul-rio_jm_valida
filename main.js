const form = document.getElementById('form');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;


function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroConta = document.getElementById('numero-conta')
    const deposito = document.getElementById('deposito')
    const mensagemSucesso = `O valor de: <b>${deposito.value}</b> foi depositado na conta <b>${numeroConta.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        deposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('erro')
        document.querySelector('.error').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('erro')
        document.querySelector('.error').style.display = 'none';
    }
})
