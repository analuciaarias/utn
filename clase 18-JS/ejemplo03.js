const empleados=[
    {
        nombre: 'Ana', trabajo: 'desarrollador'
    }, {
        nombre: 'Felicitas', trabajo: 'ingeniera'
    }, {
        nombre: 'Alfonso', trabajo: 'desarrollador'
    }, {
        nombre: 'Bernardo', trabajo: 'desarrollador'
    }, {
        nombre: 'Juan', trabajo: 'administrativo'
    }, {
        nombre: 'Celia', trabajo: 'abogada'
    }
]
const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
    )
    const noDesarrollador = empleados.filter(
        empleado => empleado.trabajo !== 'desarrollador'
        )


console.log(desarrollador)
console.log(noDesarrollador)
