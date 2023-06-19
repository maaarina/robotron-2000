// Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir.

function mostrarLista() {
    var lista = document.getElementById("lista");
    lista.style.display = "block";
}

function ocultarLista() {
    var lista = document.getElementById("lista");
    lista.style.display = "none";
}