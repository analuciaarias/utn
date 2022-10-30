const alumnos =[
    {
        nombre:'Ana', edad: 20
    },
    {
        nombre:'Felicitas', edad: 5
    },
    {
        nombre:'Alfonso', edad: 4
    },
    {
        nombre:'Bernardo', edad: 1
    },
    {
        nombre:'Juan', edad: 2
    },
    {
        nombre:'Maria', edad: 7
    }
]
const chicos = alumnos.filter(
    alumno => alumno.edad <=4
    )
console.log(chicos) 

for(let i=0; i<chicos.length; i++){
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}<p>`)
}