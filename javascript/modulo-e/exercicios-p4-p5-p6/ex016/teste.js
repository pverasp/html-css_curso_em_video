var inicio = 0
var final = 4
var passo = 2
var resultado = ''
if (passo > 0 && final > inicio){
    for (inicio;inicio<=final;inicio+=passo){
        resultado+=`${inicio} -> `
        // console.log(resultado)
    }
    console.log(`${resultado}FIM`)
}else {
    console.log('Dados invalidos!')
}

