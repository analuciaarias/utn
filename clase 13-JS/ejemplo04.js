
const valor1= prompt('Ingrese su primer numero','');
const valor2= prompt('Ingrese su segundo numero','');
const suma = parseInt (valor1) + parseInt (valor2);
const producto = (valor1)* (valor2);

console.log(suma)// seria 52 sin parseInt pq lo concatenaria y no lo sumaría pq interpreta que es una cadena de texto//
console.log(producto)//en este caso al ser un * no necesita parseInt pq * no se utiliza para concatenar//

