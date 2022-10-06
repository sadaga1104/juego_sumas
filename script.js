//Variables que almacenaran los dos numeros de la suma
var num1, num2;
//Variable para guardar el resultado de la suma
var respuesta;
//Variable donde se cargara la opcion correcta
var indiceOpCorrecta;
//Tomo los elementos que voy a manipular de la pagina
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msja");
txt_resultado = document.getElementById("resultado");

function comenzar() {
    //Cada vez que inicie limpio los campos
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
    //Genero la suma aleatoria entre 0 y 9
    num1 = Math.round(Math.random()*9);
    num2 = Math.round(Math.random()*9);
    respuesta = num1 + num2;
    //Asignamos la suma para que se visualice
    txt_suma.innerHTML = num1 + " + " + num2 + " = ";
    //Genero un numero entre 0 y 2 para colocar la opcion correcta
    indiceOpCorrecta = Math.round(Math.random()*2);
    if(indiceOpCorrecta==0){//ponemos la opcion correcta en la primera posicion
        op1.innerHTML = respuesta;
        //Al resto le doy numeros cercanos a la respuesta correcta
        op2.innerHTML = respuesta+1;
        op3.innerHTML = respuesta-1;

    }
    if(indiceOpCorrecta==1){//ponemos la opcion correcta en la segunda posicion
        op2.innerHTML = respuesta;
        //Al resto le doy numeros cercanos a la respuesta correcta
        op1.innerHTML = respuesta+2;
        op3.innerHTML = respuesta-1;

    }
    if(indiceOpCorrecta==2){//ponemos la opcion correcta en la tercera posicion
        op3.innerHTML = respuesta;
        //Al resto le doy numeros cercanos a la respuesta correcta
        op1.innerHTML = respuesta+1;
        op2.innerHTML = respuesta-1;

    }
}

//Funcion para revisar la respuesta correcta del usuario
function controlarRespuesta(opcionElegida){
    //Cargamos la respuesta elegida en la operacion
    txt_resultado.innerHTML = opcionElegida.innerHTML;
    //Controlamos si esta bien
    if(respuesta==opcionElegida.innerHTML){
        txt_msj.innerHTML = "EXCELENTE!!";
        txt_msj.style.color = "green";
        //Esperamos dos segundos y volvemos a llamar a la funcion comenzar
        setTimeout(comenzar, 2000);
    }else{
        txt_msj.innerHTML = "INTENTA DE NUEVO!!";
        txt_msj.style.color = "red";
        //Esperamos dos segundos y limpiamos los campos
        setTimeout(limpiar, 2000);
    }
}

function limpiar() {
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
}

comenzar();