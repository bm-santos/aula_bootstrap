var contador = 0;

function incrementar() {
    contador = contador+1;
    document.getElementById("contador").innerHTML = "Contador: " + contador;
}

function decrementar() {
    contador = contador-1;
    document.getElementById("contador").innerHTML = "Contador: " + contador;
}