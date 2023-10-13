function tabuada() {
    var txtNumero = document.getElementById('ItxtNumero')
    var txtTabuada = document.getElementById('ItxtTabuada') // select ItxtTabuada
    if (txtNumero.value == '' || txtNumero.value.length == 0) {
        window.alert('Informe um número!')
    } else {
        var numNumero = Number(txtNumero.value)
        var res_tab = 0
        txtTabuada.innerHTML=''
        for (var inicio = 0;inicio <= 10; inicio++) {
            let itemOption = document.createElement('option') // Cria o elemento HTML option
            itemOption.text = `${numNumero} x ${inicio} = ${numNumero * inicio}`
            itemOption.value = `${inicio}`
            txtTabuada.appendChild(itemOption)
        }
    }
}