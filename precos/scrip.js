function verificar() {
    var data = new Date()
    var ano = Number('1')
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano * Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Baixada Santitas'
            if (ano >= 0 && idade < 10){
            //criança
                var idade = (`R$200,00 a R$350,00`)
                img.setAttribute('src','imagem/h1.jpg')
            }else if (idade < 30){
            //jovem
                var idade = (`R$${idade*20},00 a R$${idade*40},00`)
                img.setAttribute('src','imagem/h2.jpg')
            }else if(idade < 50){
            //adulto
                var idade = (`R$${idade*15},00 a R$${idade*38},00`)
                img.setAttribute('src','imagem/h3.jpg')
            } else {
            //idoso
                var idade = (`R$${idade*10},00 a R$${idade*36},00`)
                img.setAttribute('src','imagem/h4.jpg')
            }
     } else if(fsex[1].checked){
            genero = 'Outros'
            if (idade >= 0 && idade < 50){
            //criança
                 var idade = ('R$700,00 a R$1000,00')
                img.setAttribute('src','imagem/m1.jpg')
            }else if (idade < 80){
            //jovem
                 var idade = (`R$${idade*15},00 a R$${idade*25},00`)
                img.setAttribute('src','imagem/m2.jpg')
            }else if(idade < 150){
            //adulto
                 var idade = (`R$${idade*10},00 a R$${idade*23},00`)
                img.setAttribute('src','imagem/m3.jpg')
            } else {
            //idoso
                var idade = (`R$${idade*9},00 a R$${idade*20},00`)
                img.setAttribute('src','imagem/m4.jpg')
        }
    }
        res.innerHTML = `Transporte com caminhão baú de Baixada Santista x ${genero}, tem um valor medio de ${idade}.<br>Para melhores infomações entre em contato (13) 99724-5567<br>`
        res.appendChild(img).style.borderRadius = '10%'
        img.style.padding = '0px'
        img.style.width = '280px'
    }
}