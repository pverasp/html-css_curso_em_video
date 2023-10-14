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
    if (arrayNumeros.length==0) {
        window.alert('Adicione os números entre 1 e 100!')

    } else {
        var resultado = window.document.getElementById('resposta')
        let paragrafo = document.createElement('p')
        paragrafo.innerHTML = `Ao todo temos ${arrayNumeros.length} ${arrayNumeros.length==1?'número':'números'}`
        resultado.appendChild(paragrafo)
    
        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `O maior valor informado foi ...`
        resultado.appendChild(paragrafo)
    
        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `O menor valor informado foi ...`
        resultado.appendChild(paragrafo)
    
        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `Somando todos os valores temos `
        resultado.appendChild(paragrafo)
    
        paragrafo = document.createElement('p')
        paragrafo.innerHTML = `A média dos valores digitados é ...`
        resultado.appendChild(paragrafo)            
    }
}
