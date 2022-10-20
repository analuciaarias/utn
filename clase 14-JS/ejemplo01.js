const num1 = parseInt(prompt('Ingrese su primer número',''));
const num2 = parseInt(prompt('Ingrese su segundo número',''));
const num3 = parseInt(prompt('Ingrese su tercer número',''));
if(num1>num2 && num1>num3){
    document.write(`El número mayor es ${num1}`)
} else if(num2>num3){
    document.write(`El número mayor es ${num2}`)
} else{
    {
        document.write(`El número mayor es ${num3}`)
    }
}