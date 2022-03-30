
function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
   
    if(ini.value.length == 0 || fim.valuelength == 0 || passo.value.length == null){
        res.innerHTML('Impossivel contar')

    }else{
        res.innerHTML = 'Contando : '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considere PASSO 1')
            p = 1
        }

        if (i < f){

            for(var c = i ; c <= f ; c += p){
            res.innerHTML += ` ${c} \u{1f638} `
            }

        }else{
            for(var c = i ; c >= f; c-=p){
                res.innerHTML += ` ${c} \u{1f638}`
            }

        }
    }


}