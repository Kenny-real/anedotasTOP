function cadastrar() {
    let nomeDigitado = document.getElementById("nome").value;
    let emailDigitado = document.getElementById("email").value;
    let senhaDigitada = document.getElementById("senha").value;

    fetch('https://backend-en99.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nomeDigitado,
            email: emailDigitado,
            password: senhaDigitada
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
}

// Função para voltar à página inicial
function voltar() {
    window.location.href = "index.html"; // Ajusta o caminho conforme necessário
}
