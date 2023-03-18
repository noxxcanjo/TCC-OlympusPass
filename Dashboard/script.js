let vendasMes = document.getElementById("vendas-mes");
let vendasAno = document.getElementById("vendas-ano");
let totalUsuarios = document.getElementById("total-usuarios");
let usuariosAtivos = document.getElementById("usuarios-ativos");
let usuariosInativos = document.getElementById("usuarios-inativos");

let botaoAtualizar = document.createElement("button");
botaoAtualizar.innerText = "Atualizar dados";
botaoAtualizar.addEventListener("click", function() {
  vendasMes.innerText = "Este mês: R$ 15.000";
  vendasAno.innerText = "Ano passado: R$ 60.000";
  totalUsuarios.innerText = "Total: 120";
  usuariosAtivos.innerText = "Ativos: 90";
  usuariosInativos.innerText = "Inativos: 30";
});

let main = document.querySelector("main");
main.appendChild(botaoAtualizar);