// script.js

async function login() {
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    const response = await fetch('http://localhost:3000/usuarios');
    const usuarios = await response.json();

    const usuarioAutenticado = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuarioAutenticado) {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página após o login
        window.location.href = 'telaQuestionario.html'; // Substitua 'pagina_solicitada.html' pelo caminho da sua página
    } else {
        alert('Email ou senha incorretos');
    }
}

async function registrar() {
    const nome = document.getElementById('nomeRegistro').value;
    const email = document.getElementById('emailRegistro').value;
    const senha = document.getElementById('senhaRegistro').value;

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
    });

    if (response.ok) {
        alert('Registro bem-sucedido! Faça login para continuar.');
    } else {
        alert('Erro no registro. Tente novamente.');
    }
}
