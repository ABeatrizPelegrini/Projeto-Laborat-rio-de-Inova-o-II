const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Recupera o administrador
    const administrador =
        JSON.parse(localStorage.getItem("administrador"));

    // Verifica se os dados estão corretos
    if (
        email === administrador.email &&
        senha === administrador.senha
    ) {

        // Salva quem está logado
        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(administrador)
        );

        // Vai para o sistema
        window.location.href = "dashboard.html";

    } else {

        alert("E-mail ou senha incorretos.");

    }

});