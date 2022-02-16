import validator from './validator.js'


let obterNumero = document.getElementById("numeroCartao");
let obterNome = document.getElementById("nome");
let obtercvv = document.getElementById("cvv");
let obtervalidade = document.getElementById("validade");

function result(){
  let numeroCartao = obterNumero.value;
  let nomeCompleto = obterNome.value;
  let cvvCartao = obtercvv.value;
  let validadeCartao = obtervalidade.value;

  let resultadoValidacao = validator.validador(numeroCartao);
  let mascararr = validator.ocultar(numeroCartao);
  let resultadoo = document.getElementById("span");

  if (nomeCompleto === "" ){
    resultadoo.textContent =  "Campo de nome vazio";
    return
  }
  if (numeroCartao === "" ){
    resultadoo.textContent =  "Campo de número cartão vazio";
    return
  }
  if (validadeCartao === "" ){
    resultadoo.textContent =  "Campo de validade vazio";
    return
  }
  if (cvvCartao === "" ){
    resultadoo.textContent =  "Campo de cvv vazio";
    return
  }

  if (resultadoValidacao) {
    window.location.href = "concluido.html";
  }
  else {
    resultadoo.textContent = mascararr + " - Cartão Invalido";
  }
  document.getElementById("numeroCartao").value = ""
}

let executaBotao = document.getElementById("botaoConcluir");
executaBotao.addEventListener("click", result)
