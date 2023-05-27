var n1 = Number(document.getElementById('primeiro_numero'));
var n2 = Number(document.getElementById('segundo_numero'));
var resultado = null;
var form = document.getElementById('formulario');


function maior (n1 , n2){
    if( n2 > n1){
    alert('o segundo numero é maior');
}else{
    alert('erro');
}}


form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeros = resultado;

    resultado = maior();

    n1 = '';
    n2 = '';

})