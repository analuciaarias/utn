const frutas = ['palta', 'naranja', 'manzana', 'bananas','anana'];
console.log(frutas);
console.log (frutas.sort());

const numeros =[78, 10, 7, 1, 2];
console.log(numeros); //78,10,7,1,2
console.log(numeros.sort())//1, 10,2,7,78

const num = numeros.sort(function(a,z){
    return a-z;//ordenamos de la a-z
})
console.log(num);//1,2,7,10,78
const num2= numeros.sort(function (a,b){
    return b-a;
})
console.log(num);//78,10,7,2,1

const palabras= ['ana','felicitas','alfonso','bernardo'];
const palab= palabras.sort();
console.log(palabras);
console.log(palabras.sort().reverse()); //solucion posible

const palabs= palabras.sort(function(b,a){
    if(b>a) return -1;//otra opcion posible
    return 0;
})
console.log(palabs)