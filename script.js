// Menu responsivo
const btnMenu = document.getElementById("btn-menu");
const listaMenu = document.getElementById("lista-menu");

btnMenu.addEventListener("click", function () {
  listaMenu.classList.toggle("ativo");
});

// Alternância entre tema claro e escuro
const btnTema = document.getElementById("tema");

btnTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    btnTema.textContent = "☀️";
  } else {
    btnTema.textContent = "🌙";
  }
});

// Validação do formulário de contato
const formulario = document.getElementById("form-contato");
const resposta = document.getElementById("resposta");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "" || email === "" || mensagem === "") {
    resposta.textContent = "Preencha todos os campos.";
    resposta.style.color = "red";
    return;
  }

  if (!emailValido.test(email)) {
    resposta.textContent = "Digite um e-mail válido.";
    resposta.style.color = "red";
    return;
  }

  resposta.textContent = "Mensagem enviada com sucesso!";
  resposta.style.color = "green";

  formulario.reset();
});