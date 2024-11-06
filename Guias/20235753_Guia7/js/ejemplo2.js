// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aqui se esta utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal (document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");
const paisSelect = document.getElementById("idCmPais");

function validarInfo(event) {
    event.preventDefault(); 

    // Obtener los valores de los campos
    let nombre = document.getElementById("idNombre").value;
    let apellido = document.getElementById("idApellidos").value;
    let fechaNacimiento = document.getElementById("idFechaNac").value;
    let email = document.getElementById("idCorreo").value;
    let password = document.getElementById("idPassword").value;
    let confirmPassword = document.getElementById("idPasswordRepetir").value;
    let interesesSeleccionados = document.querySelectorAll(".form-check-input:checked");
    let carreraSeleccionada = document.querySelector('input[name="idRdCarrera"]:checked');
    let pais = paisSelect.options[paisSelect.selectedIndex].text;
    let avatar = document.getElementById("idArchivo");

    // Validar que los campos no estén vacíos
    if (!nombre || !apellido || !fechaNacimiento || !email || !password || !confirmPassword || !carreraSeleccionada || !pais) {
        alert("Completar todos los campos obligatorios.");
        return false;
    }

    // Validar que la fecha de nacimiento no supere la fecha actual
    let fechaActual = new Date(new Date().toLocaleString("en-US", { timeZone: "America/El_Salvador" }));
    let fechaNac = new Date(fechaNacimiento);

    if (fechaNac > fechaActual) {
        alert("La fecha de nacimiento no puede ser mayor que la fecha actual.");
        return false;
    }

    // Validar el correo electrónico 
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        alert("El correo electrónico no es válido.");
        return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Validar que se haya seleccionado al menos un interés
    if (interesesSeleccionados.length === 0) {
        alert("Por favor, seleccione al menos un interés.");
        return false;
    }

    // Validar que se haya seleccionado una carrera
    if (!carreraSeleccionada) {
        alert("Por favor, seleccione una carrera.");
        return false;
    }

    // Validar que se haya seleccionado un país
    if (!pais) {
        alert("Por favor, seleccione un país.");
        return false;
    }

    // Si todo es válido, mostrar los datos en el modal
    mostrarModal(nombre, apellido, fechaNacimiento, email, password, interesesSeleccionados, carreraSeleccionada, pais, avatar);
}

// Función para mostrar datos en el modal
function mostrarModal(nombre, apellido, fechaNacimiento, email, password, interesesSeleccionados, carreraSeleccionada, pais, avatar) {
    bodyModal.innerHTML = '';
    
    let datos = [
        ["Nombre", nombre],
        ["Apellido", apellido],
        ["Fecha de Nacimiento", fechaNacimiento],
        ["Correo Electrónico", email],
        ["Contraseña", password],
        ["Intereses", Array.from(interesesSeleccionados).map(i => i.nextSibling.textContent.trim()).join(', ')],
        ["Carrera", carreraSeleccionada.nextSibling.textContent.trim()],
        ["País de Origen", pais]
    ];

    if (avatar && avatar.files.length > 0) {
        let fileName = avatar.files[0].name;
        datos.push(["Avatar", fileName]);
    }
    
    let table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    let tbody = document.createElement('tbody');
    datos.forEach(function(fila) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = fila[0];
        let td2 = document.createElement('td');
        td2.textContent = fila[1];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    bodyModal.appendChild(table);

    modal.show();
}


// Recorrer el formulario 
const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    // Recorriendo elementos del formulario 
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) { 
        // Accediendo a cada hijo del formulario
        let elemento = elementos[index];
        // verificando el tipo de control en el formulario 
        let tipoElemento = elemento.type;
        // verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

                
        // Contabilizando el total de INPUT TYPE= TEXT 
        if (tipoElemento == "text" && tipoNode == "INPUT") { 
            console.log(elemento);
            totText++;
        }
        // Contabilizando el total de INPUT TYPE = PASSWORD 
        else if (tipoElemento == "password" && tipoNode == "INPUT"){
            console.log(elemento);
            totPass++;
        }
        // Contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoElemento == "email" && tipoNode == "INPUT") { 
            console.log(elemento);
            totEmail++;
        }
        // Contabilizando el total de INPUT TYPE = RADIO 
        else if (tipoElemento =="radio" && tipoNode == "INPUT"){
            console.log(elemento);
            totRadio++;
        }        
        // Contabilizando el total de INPUT TYPE = CHECKBOX 
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT"){

            console.log(elemento);
            totCheck++;
        }
        // Contabilizando el total de INPUT TYPE - FILE 
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }
        // Contabilizando el total de INPUT TYPE = CHECKBOX 
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }
        // Contabilizando el total de INPUT TYPE - EMAIL 
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++; 
        }
    }
};

// Función para limpiar el formulario
function limpiarFormulario() {
    formulario.reset(); 
}

//agregando eventos al boton
formulario.addEventListener("submit", validarInfo);
document.getElementById("idModal").addEventListener('hidden.bs.modal', limpiarFormulario);