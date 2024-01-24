function calcular(tipo, valor){
    if(tipo === 'acao'){
        switch(valor){
            case 'c':
                document.getElementById('visor').value = ''
                break
            case '=':
                
                document.getElementById('visor').value = eval(document.getElementById('visor').value)
                break
            default:
                document.getElementById('visor').value += valor
                break
        }
    } else{
        document.getElementById('visor').value += valor
    }
}