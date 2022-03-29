var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)

if (hora <= 12) {
    console.log(`Bom dia, agora são exatamente ${hora}`)
}
    else if(hora < 18){
    console.log(`Opá, boa tarde agora são exatamente ${hora}horas`)

}       else {
        console.log(`Boa noite agora são ${hora} horas`)

}
    
