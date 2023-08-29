function calcular_imc(){
    var altura = documente.imcForm.altura.value;
    var peso = document.imcform.peso.value;
    var calculo =(peso/(altura*altura));

    if(calculo<18.5){
    resultado = "Você esta magro com esse indice:" + calculo
    }
    else if(calculo>=18.5 && calculo<24.9){
    resultado = " Você esta normal com esse indice:" + calculo 
    }
    else if(calculo>=25 && calculo<29.9){
    resultado = "Você esta com sobre peso com esse indice:" + calculo
    }
     else if(calculo>=30 && calculo<39.9){
    resultado = "Você esta com obesidade com esse indice:" + calculo
    }
    else if(calculo>40){
    resultado = "Você esta com obesidade grave com esse indice:" + calculo
     }
     documente.getElementById('resul').innerHTML = Resultado;
     }