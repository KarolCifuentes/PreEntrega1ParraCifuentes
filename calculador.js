/*funciones suma, resta, concatenación, división, porcentaje, 
    y agregar condicional y ciclo 
    hacer entradas con prompt() y salidas con alert() o console.log(), 
*/

/*
Calcular el costo de un servicio
-> Selecionnar un departamento (Condicional)
-> Selecionar un tipo de servicio (Condicional)
-> Seleccionar un cantidad de tecnicos (solo 5 sino error de ingreso)
-> Seleccionar un cantidad de tiempo
-> valor de pago a ingresar = 0 (error si pone 0)

*/



// function sumar() {
//     /* poner la variable como parametro*/
//     var num1 = Number(document.getElementById('num1').value);
//     var num2 = Number(document.getElementById('num2').value);

//     var resultado = num1 + num2

//     document.getElementById('resultado').value = resultado

//     // var resultado = window.confirm('Estas seguro?');
//     // if (resultado === true) {
//     //     window.alert('Okay, si estas seguro.');
//     // } else {
//     //     window.alert('Pareces indeciso');
//     // }

// }


var oficio, otroOficio, costoOficio, suma = 0, cuponCosto1 = -10, total , elUserTieneCupon, codigo = 1234;;

alert('Bienvenido, te queremos brindamos un servicio de limpieza');

alert('Escriba el oficio que requiere, ejemplos: \n Lavar la ropa \n Barrer \n Traperar');

do{
    oficio = (prompt("Ingrese el oficio"));

    alert('Escriba el costo');
    costoOficio = parseInt(prompt("Ingrese el costo"));

    if (costoOficio > "0" ){
        alert('El oficio de ' + oficio + ' tiene un costo de: '+costoOficio); 
        console.log("El oficio de " + oficio + " tiene un costo de: "+costoOficio);  
        
        suma = suma + costoOficio; 
        // resta = (suma + costoOficio) - resta;
    }else{
        alert('Error de ingreso') /*Error*/  

    }

    alert('Quiere ingresar mas oficios escriba si');
    otroOficio = (prompt());
    
   

}while(otroOficio == "si");

alert('El costo total de todo es: '+suma); 
console.log("El costo total de todo es: "+suma)




alert('Tiene un cupon escribe si o no'); 
prompt('')/*si*/

alert('Escriba es codigo')
elUserTieneCupon = (prompt("Cupon: "));/*1234*/


if(elUserTieneCupon == 1234 ){   

    alert('El cupon tiene un valor de: '+cuponCosto1); 
    suma = suma + (cuponCosto1);

}else{
    alert('Error de cupon')
    alert('Muchas gracias')
}

alert('El costo total con el cupo es: '+suma);
console.log("El costo total con el cupo es: "+suma)

 
















