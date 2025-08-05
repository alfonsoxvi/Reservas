document.addEventListener("DOMContentLoaded", function() {

var Lista = document.getElementById("opciones");
var mostrarEmpresas = document.getElementById("mostrarEmpresas");
var mostrarPaquete = document.getElementById("mostrarPaquete");
var Lista2 = document.getElementById("GeneralOPaquete");
var botonAceptar = document.getElementById("aceptarOferta");

    Lista.addEventListener("change", function() {
        var selectedValue = Lista.value; // Obtiene el valor de la opción seleccionada

        // Ejecuta un script basado en el valor seleccionado
        if (selectedValue === "Premium" || selectedValue == "Estándar" || selectedValue =="Destacada" || selectedValue == "Básica"){
           mostrarEmpresas.style.display = "block";
        }

        if (selectedValue === "--")
            mostrarEmpresas.style.display = "none";  
    })


    Lista2.addEventListener("change", function() {
    var valorActual = Lista2.value;

    if (valorActual === "CompraPaquete"){
       mostrarPaquete.style.display = "block";
    
    }
})
var nombre = document.getElementById("inputTexto");
var descripcion = document.getElementById("inputDesc");
var horario = document.getElementById("inputHorario");
var departamento = document.getElementById("inputDepartamento");
var ciudad = document.getElementById("inputCiudad");
var keywords = document.getElementById("inputKeywords");





    botonAceptar.addEventListener("click",function(){
    if (nombre.value == "" || descripcion.value == "" || horario.value == "" || departamento.value == "" || ciudad.value == "")
    alert("Los campos obligatorios no pueden estar vacíos") 
    else
    alert("La oferta ha sido dada de alta con éxito");
    
    nombre.value = "";
    descripcion.value = "";
    horario.value = "";
    departamento.value = "";
    ciudad.value = "";
    keywords.value = "";

    });



})







