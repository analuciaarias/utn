function todoslosParrafos(){
    const allParrafos = document.getElementsByTagName("p");
    console.log(allParrafos);

    const num = allParrafos.length;//TE DEVUELVE 7 PARRAFOS DE LAS P//

    alert('la suma de los <p> es '+ allParrafos.length);
    //imprimirá la cantidad//

}
function parrafosCaja1(){
    const caja1 = document.getElementById('caja1');
    const caja1parrafos = caja1.getElementsByTagName("p");

    //console.log(caja1); console.log(caja1parrafos);//
  
    const num = caja1parrafos.length;

    alert('la suma de los <p> es ' + caja1parrafos.length);
}
function parrafosCaja2(){
    const caja2parrafos = document.querySelectorAll('#caja2 p');
    //console.log(caja2parrafos);//

    const num= caja2parrafos.length;
    alert('la suma de los <p> es ' + caja2parrafos.length);
}