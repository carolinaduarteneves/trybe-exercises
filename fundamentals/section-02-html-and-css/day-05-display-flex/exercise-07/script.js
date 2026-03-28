const botaoSim = document.getElementById("sim");
const botaoPrincipal = document.querySelector(".botaoprincipal");
const botaoNao = document.getElementById("nao");
const irritada = document.querySelector(".irritada");

botaoSim.addEventListener("click", function () {
  botaoPrincipal.style.display = "flex";
  irritada.style.display = "none";
});


botaoNao.addEventListener("click", function () {
  botaoPrincipal.style.display = "none";
  irritada.style.display = "flex";
  alert("😥 Essa opção é inválida! 😥");
});
