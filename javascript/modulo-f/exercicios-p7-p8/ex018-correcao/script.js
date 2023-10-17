
let txtNumero = window.document.getElementById('iTxtNumero')
let selNumero = window.document.getElementById('iSelNumero')
let resultado = window.document.getElementById('resposta')
let arrayNumeros = []

function isNum(n) {
    return (Number(n) >= 1 && Number(n) <= 100) ? true : false
}
function inLista(n) {
    return arrayNumeros.indexOf(Number(n)) != -1 ? true : false
}
function adicionar() {
    if (isNum(txtNumero.value) && !inLista(txtNumero.value)) {
        // window.alert('Tudo Ok!')
        arrayNumeros.push(Number(txtNumero.value))
        let itemOption = document.createElement('option')
        itemOption.text = `Valor ${txtNumero.value} adicionado`
        itemOption.value = `${txtNumero.value}`
        selNumero.appendChild(itemOption)
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    txtNumero.value = ''  
    txtNumero.focus() 
    resultado.innerHTML=''
}
function finalizar() {
    if (arrayNumeros.length==0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = arrayNumeros.length
        let maior = arrayNumeros[0]
        let menor = arrayNumeros[0]
        let soma = 0
        let media = 0

    // Método reduce é mais lento do que a estrutura de repetição for. 
    //    maior = arrayNumeros.reduce(function (a, b) {
    //         // return a < b ? a : b; 
    //         soma = soma + b
    //         // maior = (b > maior) ? b : maior
    //         menor = (b < menor) ? b : menor
    //         return Math.max(a, b)
    //     },0)

    // Estrutura for é 3.5x  mais rápido do que o método reduce
        for (let pos in arrayNumeros) {
            soma += arrayNumeros[pos]
            maior = (arrayNumeros[pos] > maior) ? arrayNumeros[pos] : maior
            menor = (arrayNumeros[pos] < menor) ? arrayNumeros[pos] : menor
        }
        media = soma / total

        resultado.innerHTML=''
        resultado.innerHTML += `<p>Ao todo temos ${arrayNumeros.length} ${arrayNumeros.length==1?'número':'números'}</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}