
    function calcular(){
    var nome = document.getElementById('inome')
    var peso = document.getElementById('ipeso')
    var altura = document.getElementById('ialt')
    var res = document.getElementById('ires')

    if(peso.value.length == 0){
        alert('ERRO!')
    } 
   
        var n = nome.value
        var imc = (peso.value / (altura.value * altura.value)) 
       
    
         if(imc < 18.5){
            res.innerHTML = `Olá, SR.(a) ${n} <br> O seu IMC é ${imc.toFixed(2)} <br> 
            Você está abaixo do peso!!`
        } 
        
            else if(imc > 18.6 && imc < 24.9){
            res.innerHTML = `Olá, SR.(a) ${n} <br> O seu IMC é ${imc.toFixed(2)} <br> <br>
            Você está no peso ideal, parabéns`
        } 
                  else if(imc > 25.0 && imc < 29.9){
            res.innerHTML = `Olá, SR.(a) ${n} <br> O seu IMC é ${imc.toFixed(2)} <br> <br>
            Você está levemente acima do peso!`
        }   
                    else if(imc > 30.0 && imc < 34.9){
            res.innerHTML = `Olá, SR.(a) ${n} <br> O seu IMC é ${imc.toFixed(2)} <br> <br>
            Obesidade grau I`
        }   
                        else if(imc > 35 && imc < 39.9){
            res.innerHTML = `Olá, SR.(a) ${n} <br> O seu IMC é ${imc.toFixed(2)} <br> <br>
            Obesidade grau II (severa)`
        }                    else{
            res.innerHTML = `Olá, SR.(a) ${n} <br> O seu IMC é ${imc.toFixed(2)} <br> <br>
            Obesidade grau III (mórbida)`
        }
        }

           
