document.addEventListener("DOMContentLoaded", function(){
	const clickInfo = document.getElementById("buttonInfo");
	const clickPostulaciones = document.getElementById("buttonPostulaciones");
	const tablaInfo = document.getElementById("tablaInfo");
	const tablaPostulaciones = document.getElementById("tablaPostulaciones");
	
	clickPostulaciones.addEventListener("click", function(){
      tablaPostulaciones.classList.add("tablaVisible");
      tablaPostulaciones.classList.remove ("tablaInvisible");
      tablaInfo.classList.add ("tablaInvisible");
      tablaInfo.classList.remove ("tablaVisible");
      
      
      clickPostulaciones.style.backgroundColor = '#16abfb';
      clickInfo.style.backgroundColor = '#9bc8df';
	})
	
	clickInfo.addEventListener("click", function(){
      tablaInfo.classList.add ("tablaVisible");
      tablaInfo.classList.remove ("tablaInvisible");
      tablaPostulaciones.classList.add("tablaInvisible");
      tablaPostulaciones.classList.remove ("tablaVisible");
      
      clickInfo.style.backgroundColor = '#16abfb';
      clickPostulaciones.style.backgroundColor = '#9bc8df';
	})	
}
)