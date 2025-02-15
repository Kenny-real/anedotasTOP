fetch('https://backend-eng9.onrender.com/register', { 
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