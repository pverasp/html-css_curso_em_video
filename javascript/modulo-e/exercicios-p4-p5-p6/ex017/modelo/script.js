// alert('Olá gafanhotos!')
function tabuada() {
    var txtNumero = document.getElementById('ItxtNumero')
    var txtTabuada = document.getElementById('ItxtTabuada') // select ItxtTabuada
    // window.alert(p_res[9].value)
    // window.alert(numero.value)
    if (txtNumero.value == '') {
        window.alert('Informe um número!')
    } else {
        var numNumero = Number(txtNumero.value)
        var res_tab = 0
        for (var inicio = 0;inicio <= 10; inicio++) {
            res_tab = numNumero * inicio
            txtTabuada[inicio].textContent = `${numNumero} * ${inicio} = ${res_tab}`
        }
    }

}