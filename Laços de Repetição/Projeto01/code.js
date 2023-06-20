// Se ... if
function se(n){
    if(n <= 10){
        console.log("Você é criança")
    } 
    
    else if (n > 10 && n < 18){
        console.log("Você é adolescente")
    }

    else if (n > 17 && n < 65){
        console.log("Você é adulto")
    }
    
    else{
        console.log("Você é idoso")
    }
}

se(9)


// Para ... for
function para(n){
    for(let i=0; i<n;i++){
        if(i == 10){
            console.log("Você é criança")
            break
        } 

        else{
            console.log("Não atende nenhuma das condições")
        }  
    }
}

para(4)


//Enquanto ... while
function enquanto(n){
    let i=0
    while (i<n){
        i++
        if(i == 10){
            console.log("Você é criança")
            break
        } 

        else{
            console.log("Não atende nenhuma das condições")
        }  
    }
}  
enquanto(11)

//Faça_enquanto .. do while
//Primeiro ele compara, depois ele executa
function facaenq(n){
    let i = 0
    do{
        i++
        if(i == 10){
            console.log("Você é criança")
            break
        } 

        else{
            console.log("Não atende nenhuma das condições")
        }  
    }
    while (n==10)
}

facaenq(10)

//Repetição ... switch case 
function caso(n){
    switch(n){
        case 1: console.log("Você escolheu 1")
        break
        case 2:console.log("Você escolheu 2")
        break
        default: console.log("Não atende nenhuma das condições")
    }
}

caso(2)



// Sinais:

// "&&" - E;
// "==" ou "===" - igual;
// "||" - ou
//"++" - incremento