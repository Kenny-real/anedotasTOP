// Inicializa o Firebase Authentication
const auth = firebase.auth();

// Captura o formulário de cadastro
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Cadastro no Firebase Auth
    auth.createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            return user.updateProfile({ displayName: nome });
        })
        .then(() => {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "planos.html";
        })
        .catch((error) => {
            console.error("Erro ao cadastrar:", error);
            alert(error.message);
        });
});

