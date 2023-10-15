var arrayNumeros = []

function adicionar() {
    var txtNumero = window.document.getElementById('iTxtNumero')
    var selNumero = window.document.getElementById('iSelNumero')
    var resultado = window.document.getElementById('resposta')
    var numNumero = Number(txtNumero.value)
    if (txtNumero.value.length==0 || numNumero<1 || numNumero>100){
        window.alert(`Número inválido! ${numNumero}`)
    }else{
        // window.alert(`Número válido! ${numNumero}`)
        resultado.innerHTML=''
        var posicao = arrayNumeros.indexOf(numNumero)
        // window.alert(posicao)
        if (posicao != -1){
            window.alert(`Erro! Número ${numNumero} cadastrado na posição ${posicao}`)
        } else {
            let itemOption = document.createElement('option')
            itemOption.text = `Valor ${numNumero} adicionado`
            itemOption.value = `${numNumero}`
            selNumero.appendChild(itemOption)
            txtNumero.value = ''
            arrayNumeros.push(numNumero)
            // window.alert(arrayNumeros)
            // window.alert(`Número válido! ${numNumero}`)
        }

    }
}
function finalizar() {
    var resultado = window.document.getElementById('resposta')
    resultado.innerHTML=''
    if (arrayNumeros.length==0) {
        window.alert('Adicione os números entre 1 e 100!')

    } else {
        var resultado = window.document.getElementById('resposta')
        let paragrafo = document.createElement('p')
        paragrafo.innerHTML = `Ao todo temos ${arrayNumeros.length} ${arrayNumeros.length==1?'número':'números'}`
        resultado.appendChild(paragrafo)
    
        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `O maior valor informado foi ${funcMaior()}`
        resultado.appendChild(paragrafo)
    
        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `O menor valor informado foi ${funcMenor()}`
        resultado.appendChild(paragrafo)

        // Ordenar o array. E com esta função podemos fazer uma comparação entre os valores e ordenar os elementos de um array
        let numbersAsc = arrayNumeros.sort(function(a, b) {
            return a - b;
        });

        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `2 - O maior valor informado foi ${numbersAsc[numbersAsc.length-1]}`
        resultado.appendChild(paragrafo)

        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `2 - O menor valor informado foi ${numbersAsc[0]}`
        // paragrafo.innerHTML = numbersAsc
        resultado.appendChild(paragrafo)
    
        let somaValores = funcSoma()
        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `Somando todos os valores temos ${somaValores}`
        resultado.appendChild(paragrafo)
    
        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `A média dos valores digitados é ${somaValores/arrayNumeros.length}`
        resultado.appendChild(paragrafo)            
    }
}
function funcMaior() {
    var numeroMaior = arrayNumeros[0]
    for (let pos in arrayNumeros) {
        numeroMaior = (numeroMaior<arrayNumeros[pos]?arrayNumeros[pos]:numeroMaior)
    }
    return numeroMaior
}
function funcMenor() {
    var numeroMenor = arrayNumeros[0]
    for (let pos in arrayNumeros) {
        numeroMenor = (numeroMenor>arrayNumeros[pos]?arrayNumeros[pos]:numeroMenor)
    }
    return numeroMenor
}
function funcSoma() {
    var vSoma = 0
    for (let pos in arrayNumeros) {
        vSoma += arrayNumeros[pos]
    }
    return vSoma
}

