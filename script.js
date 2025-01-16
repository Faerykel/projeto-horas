function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
       alert('Bom dia!')
        img.src = './images/manha.png'
        document.body.style.background = '#E0FFFF'
    } else if (hora >= 12 && hora < 18) {
        alert('Boa tarde!')
        img.src = './images/tarde/.png'
        document.body.style.background = '#DEB887'
    } else {
        alert('Boa noite!')
        img.src = './images/noite.png'
        document.body.style.background = '#191970'
    }
}
