function gerar() {
    var num = document.getElementById('inum')
    var tab = document.getElementById('itab')

         if(num.value.length == 0){
        alert('[ERRO] Falta preencher o número!')
        } else {
            var n = Number(num.value)
            var c = 1
            tab.innerHTML = ''
                while(c <= 10){
                    var item = document.createElement('option')
                    item.text = `${n} x ${c} = ${n*c}`
                    tab.appendChild(item)
                    c++
                }

        }
}