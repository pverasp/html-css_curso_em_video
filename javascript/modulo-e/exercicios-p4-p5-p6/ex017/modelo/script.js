// alert('Olá gafanhotos!')
function tabuada() {
    var numero = document.getElementById('ItxtNumero')
    var txtTabuada = document.getElementById('ItxtTabuada') // select ItxtTabuada
    // window.alert(p_res[9].value)
    // window.alert(numero.value)
    if (numero.value == '') {
        window.alert('Informe um número!')
    } else {
        var numero2 = Number(numero.value)
        var res_tab = 0
        for (var inicio = 0;inicio <= 10; inicio++) {
            res_tab = numero2 * inicio
            txtTabuada[inicio].textContent = `${numero2} * ${inicio} = ${res_tab}`
        }
    }

}