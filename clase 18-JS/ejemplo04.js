function getNombreDiasPorMes (mes){
    if(Number.isNaN(mes)) return false;// si o si tiene que se numérico
    if (mes <1 || mes >12) return false;// mes tiene que estar comprendido entre 1 y12
    mes --; //10>9  asi octubre seria el elemento 9 pq arranca de 0 
    const data =[
        {
            nombre: 'Enero', 
            dias: 31
        },
        {
            nombre: 'Febrero', 
            dias: 28
        },
        {
            nombre: 'Marzo', 
            dias: 31
        },
        {
            nombre: 'Abril', 
            dias: 30
        },
        {
            nombre: 'Mayo', 
            dias: 31
        },
        {
            nombre: 'Junio', 
            dias: 30
        },
        {
            nombre: 'Julio', 
            dias: 31
        },
        {
            nombre: 'Agosto', 
            dias: 31
        },
        {
            nombre: 'Septiembre', 
            dias: 30
        },
        {
            nombre: 'Octubre', 
            dias: 31
        },
        {
            nombre: 'Nomviembre', 
            dias: 30
        },
        {
            nombre: 'Diciembre', 
            dias: 31
        },

    ]
    return data[mes]
}
const numMes = parseInt(prompt('Ingrese el mes del año', ''));
const resultado = getNombreDiasPorMes(numMes);

if(resultado){
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias}`)
    //alert(`El mes ${resultado.mes} tiene ${resultado.dias}`)
} else {
    alert('Mes invalido');
}