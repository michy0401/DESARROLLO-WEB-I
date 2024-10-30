//Accedemos al contenedor donde se mostrara los estudiante
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado");

//Accedemos a cada boton por medio de la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

//Agregamos el evento click a los botones, adicionalmente se le asigna la funcion que realizara la operacion
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = new Array();

function agregarElemento(){
    const numero = parseInt(document.querySelector("#inputNumero").value);
    //verificando que sea un numero
    if (isNaN(numero)){
        alert("Debe ingresar un numero valido");
    } else{
        //agregamos un nuevo elemento al arreglo
        arreglo.push(numero);

        //Utilizaremos la API DOM para crear un elemento html
        let caja = document.createElement("div"); //creamos un elemento <div> </div>
        caja.className = "col-md-1 colum"; //agregamos una clase al elemento <div> </div>
        let valor = document.createElement("h3"); //creamos un elemento <h3></h3>
        valor.textContent = numero; //agregamos texto al elemento <h3></h3>
        caja.appendChild(valor);  //le pasamos como hijo la etiqueta  <h3></h3> a nuestro <div> </div>

        //insertamos los nuevos elementos en el contenedor, utiliza before en para insertar el nuevo elemento dentro del idContainerArreglo y despues de su ultimo hijo
        containerArreglo.insertAdjacentElement("beforeend", caja);
    }
}

function ordenarElementos(){
    //utilizaremos un for...of para recorrer el arreglo a su vez se utilizara .sort() para ordenarlo

    for (let i of arreglo.sort()){
        let caja = document.createElement("div");
        caja.className = "col-md-1 colum-green";
        let valor = document.createElement("h3");
        valor.textContent = i;
        caja.appendChild(valor);
        containerArregloOrdenado.insertAdjacentElement("beforeend", caja);
    }
}