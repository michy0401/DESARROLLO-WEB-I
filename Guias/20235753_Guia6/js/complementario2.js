function validacionFormulario() {
    let carnet = document.getElementById("carnet").value;
    let nombre = document.getElementById("nombre").value;
    let dui = document.getElementById("dui").value;
    let nit = document.getElementById("nit").value;
    let fecnac = document.getElementById("fecnac").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;
    let mensaje = "";

    // Validación para carnet 
    if (!/^[A-Za-z]{2}\d{3}$/.test(carnet)) {
        mensaje += "El carnet debe tener el formato de dos letras seguidas de tres números (Ej. AB001).\n";
    }

    // Validación para nombre completo
    if (!/^[A-Za-z\s]+$/.test(nombre)) {
        mensaje += "El nombre solo debe contener letras y espacios.\n";
    }

    // Validación para DUI 
    if (!/^\d{8}-\d{1}$/.test(dui)) {
        mensaje += "El DUI debe tener el formato ########-#.\n";
    }

    // Validación para NIT
    if (!/^\d{4}-\d{6}-\d{3}-\d{1}$/.test(nit)) {
        mensaje += "El NIT debe tener el formato ####-######-###-#.\n";
    }

    // Validación para fecha de nacimiento 
    if (!fecnac) {
        mensaje += "La fecha de nacimiento es obligatoria.\n";
    }

    // Validación para correo electrónico 
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mensaje += "Ingrese un correo electrónico válido.\n";
    }

    // Validación para edad
    if (isNaN(edad) || edad <= 0) {
        alert += "La edad debe ser un número mayor a 0.\n";
    }

}


