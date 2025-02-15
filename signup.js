const API_URL = "https://backend-eng0.onrender.com"; // URL do backend

async function registerUser(name, email, password) {
    try {
        const response = await fetch(`${API_URL}/register`, { // Chama a API de registro
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password }) // Envia os dados do usuário
        });

        const data = await response.json();
        console.log("Resposta do backend:", data);

        if (data.success) {
            alert("Registro bem-sucedido!");
            window.location.href = "login.html"; // Redireciona para login
        } else {
            alert("Erro no cadastro: " + data.message);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

// Captura o evento de cadastro no formulário
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    registerUser(name, email, password);
});
