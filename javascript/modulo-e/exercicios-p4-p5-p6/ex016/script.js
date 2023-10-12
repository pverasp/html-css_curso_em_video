function contar(){
    var txtinicio = window.document.getElementById('ItxtInicio')
    var txtfim = window.document.getElementById('ItxtFim')
    var txtpasso = window.document.getElementById('ItxtPasso')
    var res = window.document.querySelector('p#resultado')

    var numInicio = Number(txtinicio.value)
    var numFim = Number(txtfim.value)
    var numPasso = Number(txtpasso.value)

    var resultado = ''
    if (txtinicio.value.length == 0 || txtfim.value.length == 0) {
        resultado ='Impossível contar!'
    } else {
        if (numPasso<=0){
            window.alert('Passo inválido! Coniderando  passo = 1')
            numPasso = 1
        }
        // numPasso = Number(numPasso == 0 ? '1' : numPasso)
        resultado = `Contando: <br>`
        switch (numInicio<numFim) {
            case false:{
                for (numInicio; numInicio>=numFim; numInicio-=numPasso) {
                    resultado += `${numInicio} \u{1F449} `
                    // \u{1F449} emoji apontando para direita
                }
                break
            }
            default: {
                for (numInicio; numInicio<=numFim; numInicio+=numPasso) {
                    resultado += `${numInicio} \u{1F449} `
                }
                break
            }
        }
        // \u{1F3C1} -> emoji bandeira cinza
        resultado += `\u{1F3C1}`
        // res.innerHTML=resultado        
    }
    res.innerHTML=resultado 
}
