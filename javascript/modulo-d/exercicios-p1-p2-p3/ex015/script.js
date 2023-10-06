function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    
    var fano = window.document.getElementById('itxtano')
    var res = window.document.querySelector('div#resultado')

    

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')

        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var genero = ''

        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10){
                img.setAttribute('src','imagens/bebe_f_circle.png')
            } else if (idade < 18) {
                img.setAttribute('src','imagens/jovem_f_circle.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/adulto_f_circle.png')
            } else {
                img.setAttribute('src','imagens/idoso_f_circle.png')
            } 
        } else {
            genero = 'Homen'
            if (idade < 10){
                img.setAttribute('src','imagens/bebe_m_circle.png')
            } else if (idade < 18) {
                img.setAttribute('src','imagens/jovem_m_circle.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/adulto_m_circle.png')
            } else {
                img.setAttribute('src','imagens/idoso_m_circle.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}