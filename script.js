function ejer1(){
    let uno=[];
    for (var i=0 ;i<10;i++){
        uno.push(Math.floor(Math.random()*10));
    }
    alert(uno);
}
function ejer2(){
    alert("Ingrese palabras separadas por \n 1. Coma \n 2. Punto");
    let a=prompt(" ");
    var c=" ";
    var b=[ ];
    if(a==1){
        var coma=",";
        c=prompt("Ingrese sus palabras divididas entre coma ");
        b=c.split(coma);
    }else if(a==2){
        var punto=".";
        c=prompt("Ingrese sus palabras divididas entre punto ");
        b=c.split(punto);
    }
    alert(b);
}
function ejer3(){
    var a=[10,40,30,20,15,5];
    alert("El numero menor es "+Math.min(...a));
    alert("El numero mayor es "+Math.max(...a));
}