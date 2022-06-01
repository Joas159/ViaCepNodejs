const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputCep = document.querySelector('#cep');
const inputestado = document.querySelector('#estado');
const inputCidade = document.querySelector('#cidade');
const inputRua = document.querySelector('#rua');
const inputNumCasa = document.querySelector('#numCasa');
const inputibge = document.querySelector('#ibge');

inputCep.addEventListener('change', () => {
    if (inputCep.value.length !== 8) {
        console.log('ERRO NO COMPRIMENTO DO CEP');
        alert('ERRO NO COMPRIMENTO DO CEP');
        return;
    }
    console.dir(inputCep);
    const promessaResposta = fetch('https://viacep.com.br/ws/' + inputCep.value +'/json/'); // requerimento da promise do servidor
    promessaResposta.then((respostaEfetiva) => {     // informando espera p/ retorno via callBack
        const promessaBody = respostaEfetiva.json(); // formatação da resposta para o padrão json

        promessaBody.then((body) => {
            inputestado.value = body.uf;
            inputCidade.value = body.localidade;
            inputRua.value = body.logradouro;
            inputibge.value = body.ibge;
        });
    });

});