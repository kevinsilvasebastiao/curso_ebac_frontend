function validaNumero(){
    var campoA = parseInt(document.getElementById('primeiro_numero').value);
    var campoB = parseInt(document.getElementById('segundo_numero').value);

    if (campoA < campoB){
        document.getElementById('mensagem').innerHTML = 'valido';
        document.getElementById('mensagem').style.color = 'green';
    }else{
        document.getElementById('mensagem').innerHTML = 'erro';
        document.getElementById('mensagem').style.color = 'red';
    }
    return false;
}