import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        // Faz login no Firebase Auth
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);

        // Redireciona para a tela hello.html se o login for bem-sucedido
        alert("Login realizado com sucesso!");
        window.location.href = "hello.html";
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao fazer login: " + error.message);
    }
});