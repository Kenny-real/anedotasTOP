const API_URL = "https://backend-eng9.onrender.com"; // URL do backend

// Função para cadastrar um usuário
async function registerUser(name, email, password) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        console.log("Resposta do backend (Cadastro):", data);

        if (data.success) {
            alert("Cadastro bem-sucedido! Agora faça login.");
            window.location.href = "login.html"; // Redireciona para login
        } else {
            alert("Erro no cadastro: " + data.message);
        }
    } catch (error) {
        console.error("Erro na requisição de cadastro:", error);
    }
}

// Função para logar um usuário
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
        console.log("Resposta do backend (Login):", data);

        if (data.success) {
            alert("Login bem-sucedido!");
            window.location.href = "hello.html"; // Redireciona após login
        } else {
            alert("Erro no login: " + data.message);
        }
    } catch (error) {
        console.error("Erro na requisição de login:", error);
    }
}

// Captura o evento de login no formulário
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;
    loginUser(email, password);
});

// Captura o evento de cadastro no formulário (se existir)
document.getElementById("register-form")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    registerUser(name, email, password);
});

// Função para voltar à página anterior
function voltar() {
    window.history.back();
}
