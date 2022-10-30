const datosUsuarios = [
{
    nombre: 'Ana', password:'abc123'
},
{
    nombre: 'Felicitas', password: '123abc'
},
{
nombre: 'Alfonso', password: '123def'
},
{
nombre: 'Bernardo', password: '123ghi'
}

]
const soloPassword = datosUsuarios.map(function(p){
    return p.password;
})
console.log(soloPassword);