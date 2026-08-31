const form = document.getElementById("formCadastro");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha =
        document.getElementById("confirmarSenha").value;

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {

        alert("As senhas não são iguais!");

        return;
    }

    // Cria o objeto administrador
    const administrador = {

        nome: nome,
        email: email,
        senha: senha,
        tipo: "ADMINISTRADOR"

    };

    // Salva o administrador
    localStorage.setItem(
        "administrador",
        JSON.stringify(administrador)
    );

    alert("Administrador cadastrado com sucesso!");

    // Vai para o login
    window.location.href = "login.html";

});