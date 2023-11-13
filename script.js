// função pra incrementar os números
function insert(num) {
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num
}

// função pra limpar a calculadora
function clean() {
    document.getElementById('result').innerHTML = ""
}

// função pra apagar número por número
function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

// função pra calcular
function calcular() {
    var resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado);
    } else{
        document.getElementById('result').innerHTML = "Nada para calcular!"
    }
}