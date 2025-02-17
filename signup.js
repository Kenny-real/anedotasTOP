import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        await updateProfile(userCredential.user, { displayName: nome });

        alert("Cadastro realizado com sucesso!");
        window.location.href = "planos.html";
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert(error.message);
    }
});

