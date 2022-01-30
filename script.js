function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                res.innerHTML = `${genero}  criança de ${idade} anos<br>`
                img.setAttribute('src', 'foto.bebe.m.jpg')
            } else if( idade < 21) {
                //jovem
                res.innerHTML = `${genero} jovem de ${idade} anos<br>`
                img.setAttribute('src', 'foto.jovem.m.jpg')
            } else if( idade < 50) {
                //adulto
                res.innerHTML = `${genero} adulto de ${idade} anos<br>`
                img.setAttribute('src', 'foto.adulto.m.jpg')
            } else {
                //idoso
                res.innerHTML = `${genero} idoso de ${idade} anos<br>`
                img.setAttribute('src', 'foto.idoso.m.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                res.innerHTML = `${genero} criança de ${idade} anos<br>`
                img.setAttribute('src', 'foto.bebe.f.jpg')
            } else if( idade < 21) {
                //jovem
                res.innerHTML = `${genero} jovem de ${idade} anos<br>`
                img.setAttribute('src', 'foto.jovem.f.jpg')
            } else if( idade < 50) {
                //adulto
                res.innerHTML = `${genero} adulta de ${idade} anos<br>`
                img.setAttribute('src', 'foto.adulto.f.jpg')
            } else {
                //idoso
                res.innerHTML = `${genero} idosa de ${idade} anos<br>`
                img.setAttribute('src', 'foto.idoso.f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
    
}
