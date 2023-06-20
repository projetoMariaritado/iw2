 // Mensagem de alerta topo da tela (OK)----
 //alert("Olá mundo!")

 // Mensagem de confirmação (OK ou CANCELAR) ----
 //confirm("Você aceita continuar?")

 // Mensagem (com entrada de texto) ----
 //var nome = prompt("Digite seu nome: ")
 /*console.log(nome)
 document.write(nome)*/

 // VARIÁVEIS -----
 
 //VAR
 /*var a = 10
 console.log(a) --> aparece apenas para o desenvolvedor
 a = 15
 console.log(a)*/

 //CONST - não é possivel agregar um novo valor para uma variável constante.
 /*const b = 10
 console.log(b)*/
 
//LET
 /*let c = 10
 console.log(c)
 if (true){
    c = 15
    console.log(c)
 }
 console.log(c)*/

 /*var nome = prompt("Digite seu nome: ")
 //alert("Bom dia " = nome)
 //TEMPLATE STRING => INTERPOLAÇÃO
 alert(`Bom dia ${nome}`)*/

 var n1 = parseInt(prompt("Digite o N1"))
 var n2 = parseInt(prompt('Digite o N2'))
 console.log("N1 é: " + typeof n1)
 console.log("N2 é: " + typeof n2)


 var soma = n1 + n2
 console.log("soma é: " + typeof soma)

 if (soma>10){
    document.write(`<p class="maior">A soma de ${n1} com ${n2} é : ${soma}</p>`)
 }
 else{
    document.write(`<p class="menor">A soma de ${n1} com ${n2} é : ${soma}</p>`)
 }

 






 
 