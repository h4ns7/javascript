function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    


    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia caro colega, agora são ${hora} horas`
        img.src = 'imagens/manha.png'
        document.body.style.background = '#feaf41';
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde caro amigo, agora são ${hora} horas`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#f94f18';
    }else {
        msg.innerHTML = `Bom noite querido, agora são ${hora} horas`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#013046';
    }
}