const numero1 = parseInt(prompt("Ingrese un numero"));
const numero2 = parseInt(prompt("Ingrese un segundo numero"));
const numero3 = parseInt(prompt("Ingrese un tercer numero"));

if(numero1 > numero2 & numero1 > numero3){
    document.writeln("El numero mayor es: " + numero1)
} else if (numero2 > numero1 & numero2 > numero3){
    document.writeln("El numero mayor es: " + numero2)
} else {
document.writeln("El numero mayor es: " + numero3)}
