const nombre= prompt('ingrese su nombre','');
const nota= parseInt(prompt('ingrese su nota',''))
//console.log(nombre);
//console.log(nota);
if(Number.isNaN(nota)){
    document.write('La nota ingresada no es valida')
} else if(nota>= 4){
    document.write(`${nombre} estas aprobado con ${nota}`)
} else{
    document.write(`${nombre} estás desaprobado con ${nota}, segui estudiando.`)
}