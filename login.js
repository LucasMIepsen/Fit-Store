function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Simula um login básico
  if (email === "lucasmiepsen@gmail.com" && senha === "12345") {
    window.location.href = "WebSite.html"; // <- aqui vai o nome da sua landing page
  } else {
    alert("E-mail ou senha incorretos.");
  }
}