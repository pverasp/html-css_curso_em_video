function contar(){
    // alert('Olá gafanhotos!')
    var txtinicio = window.document.getElementById('ItxtInicio')
    var txtfim = window.document.getElementById('ItxtFim')
    var txtpasso = window.document.getElementById('ItxtPasso')
    var res = window.document.querySelector('p#resultado')

    var numInicio = Number(txtinicio.value)
    var numFim = Number(txtfim.value)
    var numPasso = Number(txtpasso.value)

    var resultado = ''
    if (txtinicio.value=='' || txtfim.value=='') {
        resultado ='Impossível contar!'
    } else {
        if (numPasso<=0){
            window.alert('Passo inválido! Coniderando  passo = 1')
            numPasso = 1
        }
        // numPasso = Number(numPasso == 0 ? '1' : numPasso)
        switch (numInicio<numFim) {
            case false:{
                for (numInicio; numInicio>=numFim; numInicio-=numPasso) {
                    resultado += `${numInicio} 👉 `
                }
                break
            }
            default: {
                for (numInicio; numInicio>=numFim; numInicio-=numPasso) {
                    resultado += `${numInicio} 👉 `
                }
                break
            }
        }
        resultado += `🏳️`
        res.innerHTML=resultado        
    }
}
