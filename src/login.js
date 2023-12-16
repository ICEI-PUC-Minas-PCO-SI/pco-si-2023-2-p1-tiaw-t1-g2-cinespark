// script.js

async function login() {
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    // Verifica se os campos estão vazios
    if (!email || !senha) {
        alert('Por favor, preencha todos os campos de login.');
        return;
    }

    const response = await fetch('https://db-json-cinespark.vercel.app/usuarios');
    const usuarios = await response.json();

    const usuarioAutenticado = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuarioAutenticado) {
        sessionStorage.setItem("userid", usuarioAutenticado.id);
        alert('Login bem-sucedido!');
        // Redirecionar para outra página após o login
        window.location.href = './Telaquestionario.html'; // Substitua 'pagina_solicitada.html' pelo caminho da sua página
    } else {
        alert('Email ou senha incorretos');
    }
}


async function registrar() {
    const nome = document.getElementById('nomeRegistro').value;
    const email = document.getElementById('emailRegistro').value;
    const senha = document.getElementById('senhaRegistro').value;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos para registrar.');
        return;
    }

    // Verifica se o formato do e-mail é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    const response = await fetch('https://db-json-cinespark.vercel.app/usuarios', {
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
