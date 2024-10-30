//Otra forma de acceder a un elemento HTML es utilizando el getElementById del DOM nosete que pra este caso no se antepone el caracter #
const campo = document.getElementById("idTxtNumero");

//definamos una funcion anonima que permita validar en tiempo real el ingreso de un numero
const validarNumero = function (e){
    //creamos una expresion regular que valida que sean numeros

    let validar = /^[0-9]{1}$/;
    let tecla = e.key;
    /*.test valida que la expresion regular coincida con el valor ingresado paodra observar que al intentar teclara un letra u otro caracter diferente a un numero este no se escribe en el campo */
    if (!validar.test(tecla)) e.preventDefault();
};

//definiendo el evento keypress para el campo 
campo.addEventListener("keypress", validarNumero);

//trabajando con el boton calcular
const boton = document.getElementById("idBtnCalcular");

//definamos una funcion anonima para calcular el factorial de un numero 
function calcularFactorial(numero) {
    return numero < 2 ? 1 : numero * calcularFactorial(numero-1);
}

//definaos una funcion de tipo flecha para imprimir el resultado del factorial
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero}! es ${resultado}`;
};

//definimos una funcion tradicional 
function calcular () {
    let numero = document.getElementById("idTxtNumero").value;
    if (numero != ""){
        //llamamos a la funcion anonima para que calcule el factorial
        let resultado = calcularFactorial(numero);
        //enviando el resultado a una funcion tipo flecha
        imprimir(numero, resultado);
    }else{
        alert("Debe ingresar un numero valido");
    }
}
//definiendo el evento click para el boton
boton.addEventListener("click", calcular);