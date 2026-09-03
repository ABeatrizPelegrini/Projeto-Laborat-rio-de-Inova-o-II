<<<<<<< HEAD
// Verifica se existe um administrador cadastrado
const administrador = localStorage.getItem("administrador");

if (administrador) {

    // Se já existe administrador,
    // manda o usuário para o login
    window.location.href = "login.html";

} else {

    // Se NÃO existe administrador,
    // manda para o primeiro cadastro
    window.location.href = "primeiro-cadastro.html";

=======
// Verifica se existe um administrador cadastrado
const administrador = localStorage.getItem("administrador");

if (administrador) {

    // Se já existe administrador,
    // manda o usuário para o login
    window.location.href = "login.html";

} else {

    // Se NÃO existe administrador,
    // manda para o primeiro cadastro
    window.location.href = "primeiro-cadastro.html";

>>>>>>> 137a64123056e47e7ab5257224713dbfab9858f2
}