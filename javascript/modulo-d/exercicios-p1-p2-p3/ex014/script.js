// alert('Olá gafanhotos!')
function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img1 = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // msg.innerHTML = `Agora são ${hora} h.`
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} h.`
        img1.src = 'imagens/manha-circle_p.png'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora} h.`
        img1.src = 'imagens/tarde-circle_p.png'
    } else {
        msg.innerHTML = `Agora são ${hora} h.`
        img1.src = 'imagens/noite-circle_p.png'
    }
    
}
