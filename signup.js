// Referência ao Firebase Authentication
const auth = firebase.auth();

// Captura o formulário de cadastro
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede recarregamento da página

    // Captura os valores inseridos pelo usuário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Registra o usuário no Firebase Authentication
    auth.createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            const user = userCredential.user;

            // Opcional: Atualiza o nome do usuário
            return user.updateProfile({ displayName: nome });
        })
        .then(() => {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "planos.html"; // Redireciona para planos.html
        })
        .catch((error) => {
            console.error("Erro ao cadastrar:", error);
            alert(error.message);
        });
});
