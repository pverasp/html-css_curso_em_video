function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('itxtano')
    var res = window.document.querySelector('div#resultado')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')

    } else {
        window.alert(`${ano}`)
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        if (fsex[1].checked) {
            res.innerHTML += `<br>Gênero: Feminino`
        } else {
            res.innerHTML += `<br>Gênero: Masculino`
        }

    }
    
}