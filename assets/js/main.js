let menu = document.getElementById('hamburguer');
let header = document.getElementById('teste');

menu.addEventListener('click', function() {
    header.classList.add('aberto');
});

let nav = document.getElementById('fechar');

nav.addEventListener('click', function() {
    header.classList.remove('aberto');
});

let listaMenu = document.getElementById('hello2');

listaMenu.addEventListener('click', function() {
    header.classList.remove('aberto');
});



let nameUser = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let mensagem = document.getElementById('mensagem');
let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(`Name: ${nameUser.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Phone: ${phone.value}`);
    console.log(`Mensagem: ${mensagem.value}`);

    formulario.reset();
});

formulario.addEventListener('reset', function() {
    alert('Voce limpou o formulário!');
});