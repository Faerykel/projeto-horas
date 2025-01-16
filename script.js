function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    mmsg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = './images/manha.png'
        document.body.style.background = '#E0FFFF'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = './images/tarde/.png'
        document.body.style.background = '#DEB887'
    } else {
        //BOA NOITE
        img.src = './images/noite.png'
        document.body.style.background = '#191970'
    }
}
