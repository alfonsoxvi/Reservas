document.addEventListener("DOMContentLoaded", function() {
    const nombreInput = document.getElementById("inputNombre");
    const inputEmpresa = document.getElementById("inputEmpresa");
    const inputKeyword = document.getElementById("inputKeyword");
    const formularioFiltro = document.getElementById("filtroFormulario");
    const textoAOcultar1 = document.getElementById("textoAOcultar");
    const textoAOcultar2 = document.getElementById("textoAOcultar2");
    var miBoton = document.getElementById("botonLeerMas");
    var botonLeerMenos = document.getElementById("botonLeerMenos");
    var botonLeerMenos2 = document.getElementById("botonLeerMenos2");
    var botonLeerMas2 = document.getElementById("botonLeerMas2");


    const contLeerMas = document.getElementById("contenidoLeerMas");
    const contLeerMas2 = document.getElementById("contenidoLeerMas2");

    const filtrar = document.getElementById("filtroFormulario");




    

    filtrar.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombreInput = document.getElementById("inputNombre");
        var minusculasN1 = nombreInput.value.toLowerCase();
        var minusculasE1 = inputEmpresa.value.toLowerCase();
        var minusculasK1 = inputKeyword.value.toLowerCase();

        var minusculasN2 = nombreInput.value.toLowerCase();
        var minusculasE2 = inputEmpresa.value.toLowerCase();
        var minusculasK2 = inputKeyword.value.toLowerCase();

        var nombreCorrecto1 = (minusculasN1 == "desarrollador frontend" || minusculasN1 == "desarrollador" || nombreInput.value == "");
        var empresaCorrecta1 = (minusculasE1 == "ecotech" || minusculasE1 == "");
        var keywordCorrecta1 = (minusculasK1 == "" || minusculasK1 == "tiempo completo" || minusculasK1 == "remoto");

        var nombreCorrecto2 = (minusculasN2 == "analista de marketing digital" || minusculasN2 == "analista" || minusculasN2 == "");
        var empresaCorrecta2 = (minusculasE2 == "ecotech" || minusculasE2 == "");
        var keywordCorrecta2 = (minusculasK2 == "" || minusculasK2 == "medio tiempo" || minusculasK2 == "freelance");


    if (!keywordCorrecta2){
    textoAOcultar2.style.display = "none";
    } 

    if (!keywordCorrecta1){
        textoAOcultar1.style.display = "none";
    }

    if (!nombreCorrecto1){
        textoAOcultar1.style.display = "none";
    }

   if (nombreCorrecto1){
    {
     if (empresaCorrecta1) {  
        if (keywordCorrecta1)
        textoAOcultar1.style.display = "block";
        else{
        textoAOcultar1.style.display = "none";
        }
    }
    else{ 
    textoAOcultar1.style.display = "none";
    }
    }
    }

    
    if (!nombreCorrecto2){
        textoAOcultar2.style.display = "none";
    }

   if (nombreCorrecto2){
    {
     if (empresaCorrecta2) {  
        if (keywordCorrecta2)
        textoAOcultar2.style.display = "block";
        else{
        textoAOcultar2.style.display = "none";
        }
    }
    else{ 
    textoAOcultar2.style.display = "none";
    }
    }
    }

})


//SCRIPTS PARA ALTA OFERTA












/*
    nombreInput.addEventListener("input", function(event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario
        if (nombreInput.value == "Desarrollador") {
        textoAOcultar1.style.display = "block"
        }
    })
        inputEmpresa.addEventListener("input", function() {
            if (inputEmpresa.value === "" && nombreInput.value === "") {
                contFlexAnalista.style.display = "flex";
            }
        });

        nombreInput.addEventListener("input", function(event) {
            event.preventDefault(); // Evitar el envío predeterminado del formulario
            if (nombreInput.value == "") {
            contFlexAnalista.style.display = "none";
            }
        })
*/

})
