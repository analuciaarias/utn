mes= parseInt(prompt('Ingrese mes en números',''));
if(mes ==1 || mes ==2 || mes==3){
    document.write('Corresponde el primer trimestre');
} else if (mes ==4 || mes ==5 || mes==6){
    document.write('Corresponde el segundo trimestre')
;} else if(mes ==7 || mes ==8 || mes==9){
    document.write('Corresponde el tercer trimestre');} 
else{
        document.write('Corresponde el último trimestre');}