function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERROR Verifique o ano corretamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crinaçaM.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/adolecenteM.png')

            } else if(idade  < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            } else {
                //idoso 
                img.setAttribute('src', 'imagens/idosoM.png')
            }

        }else if(fsex[1].checked){
            genero='mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crinaçaF.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/adolecenteF.png')

            } else if(idade  < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultoF.png')

            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoF.png')
            }


        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}