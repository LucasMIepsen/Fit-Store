function recuperarSenha(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (email) {
    alert("Se este e‑mail estiver cadastrado, enviaremos as instruções para redefinir sua senha.");
    // Aqui você pode redirecionar ou resetar o formulário
    window.location.href = "login.html";
  } else {
    alert("Por favor, informe um e‑mail válido.");
  }

  return false;
}