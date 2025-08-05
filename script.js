function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '500px'
        img.style.height = '500px'

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criancam.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemh.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoh.png')
            } else {
                img.setAttribute('src', 'imagens/idosoh.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criancaf.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultom.png')
            } else {
                img.setAttribute('src', 'imagens/idosom.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}



