//Creacion de la tabla utilizando concatenacion de cadenas
let table ="<table>";
table += "<thead>";
table += "<tr>";
table += "<th scope='col'>#</th>";
table += "<th scope='col'>Nombre</th>";
table += "<th scope='col'>Apellido</th>";
table += "<th scope='col'>Correo electronio</th>";
table += "</tr>";
table += "</thead>";
table += "<tbody>";
//Datos de los alumnos
const alumnos =[
    {id:1, nombre:"Marcos Antonio", apellido:"Alas", correo:"marcos.alas@estudiante.esen.edu.sv"},
    {id:2, nombre:"Ana Paola", apellido:"Rivas Polanco", correo:"paola.rivas@estudiante.esen.edu.sv"},
    {id:3, nombre:"Alexis Armando", apellido:"Quintnilla Peña", correo:"alexis.quintanilla@estudiante.esen.edu.sv"},
    {id:4, nombre:"Vanessa Alejandra", apellido:"Bermudez Urquilla", correo:"vanessa.bermudez@estudiante.esen.edu.sv"},
    {id:5, nombre:"Oscar Armando", apellido:"López Rodriguez", correo:"oscar.lopez@estudiante.esen.edu.sv"}
];

//Agregar filas de los datos al cuerpo de la tabla
alumnos.forEach(alumno => {
    table += "<tr>";
    table += `<td scop='row'>${alumno.id}</td>`;
    table += `<td scop='row'>${alumno.nombre}</td>`;
    table += `<td scop='row'>${alumno.apellido}</td>`;
    table += `<td scop='row'>${alumno.correo}</td>`;
    table += "</tr>";
});

table += "</tbody>";
table += "</table>";

//Agregar la tabla al contenedor
const contenedor = document.querySelector("#idContenedor");
contenedor.innerHTML = table;
