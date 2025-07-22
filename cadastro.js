function cadastrarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Simulação simples do cadastro
  if (nome && email && senha) {
    alert("Cadastro realizado com sucesso!");
    window.location.href = "WebSite.html"; // <-- redireciona para a landing page FitStore
  } else {
    alert("Por favor, preencha todos os campos.");
  }

  return false;
}