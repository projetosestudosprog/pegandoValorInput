let botaoDeClique = document.querySelector("button");
let caixaDeEntrada = document.querySelector(
  'input[name="caixa-de-entrada-valor"]'
);
let valorDoH1 = document.querySelector("h1");
let limparBotao = "Limpar botao";

botaoDeClique.addEventListener("click", () => {
  if (botaoDeClique.innerHTML === "Clique Aqui") {
    botaoDeClique.innerHTML = limparBotao;
    valorDoH1.innerHTML = caixaDeEntrada.value;
    botaoDeClique.classList.add("botao-ativado");
    botaoDeClique.classList.remove("botao-desativado");

  } else {
    botaoDeClique.innerHTML = "Clique Aqui";
    valorDoH1.innerHTML = "";
    caixaDeEntrada.value = "";
    botaoDeClique.classList.remove("botao-ativado")
    botaoDeClique.classList.add("botao-desativado")
  }
});
