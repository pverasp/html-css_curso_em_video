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
    for (numInicio; numInicio<=numFim; numInicio+=numPasso) {
        resultado += `${numInicio} -> `
    }
    res.innerHTML=resultado

}
