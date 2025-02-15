const API_URL = "https://backend-eng0.onrender.com"; // URL do backend

async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log("Resposta do backend:", data);

        if (data.success) {
            alert("Login bem-sucedido!");
            window.location.href = "hello.html"; // Redireciona após login
        } else {
            alert("Erro no login: " + data.message);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

// Captura o evento de login no formulário
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value; // Corrigido (antes era "password")
    loginUser(email, password);
});

// Função para voltar à página inicial
function voltar() {
    window.history.back();
}
