document.addEventListener("DOMContentLoaded", function(){
	const clickInfo = document.getElementById("buttonInfo");
	const clickOferta = document.getElementById("buttonOfertas");
	const clickPaquetes = document.getElementById("buttonPaquetes");
	const tablaInfo = document.getElementById("tablaInfo");
	const tablaOferta = document.getElementById("tablaOferta");
	const tablaPaquete = document.getElementById("tablaPaquetes");
	
	clickOferta.addEventListener("click", function(){
      tablaOferta.classList.add("tablaVisible");
      tablaOferta.classList.remove ("tablaInvisible");
      tablaInfo.classList.add ("tablaInvisible");
      tablaInfo.classList.remove ("tablaVisible");
      tablaPaquete.classList.add ("tablaInvisible");
      tablaPaquete.classList.remove ("tablaVisible");
      
      
      clickOferta.style.backgroundColor = '#16abfb';
      clickInfo.style.backgroundColor = '#9bc8df';
      clickPaquetes.style.backgroundColor = '#9bc8df';
	})
	
	clickInfo.addEventListener("click", function(){
      tablaInfo.classList.add ("tablaVisible");
      tablaInfo.classList.remove ("tablaInvisible");
      tablaOferta.classList.add("tablaInvisible");
      tablaOferta.classList.remove ("tablaVisible");
      tablaPaquete.classList.add ("tablaInvisible");
      tablaPaquete.classList.remove ("tablaVisible");
      
      clickInfo.style.backgroundColor = '#16abfb';
      clickOferta.style.backgroundColor = '#9bc8df';
      clickPaquetes.style.backgroundColor = '#9bc8df';
	})
	
	clickPaquetes.addEventListener("click", function(){
	  tablaPaquete.classList.add ("tablaVisible");
      tablaPaquete.classList.remove ("tablaInvisible");
	  tablaOferta.classList.add("tablaInvisible");
      tablaOferta.classList.remove ("tablaVisible");
      tablaInfo.classList.add ("tablaInvisible");
      tablaInfo.classList.remove ("tablaVisible");
      
      clickPaquetes.style.backgroundColor = '#16abfb';
      clickInfo.style.backgroundColor = '#9bc8df';
      clickOferta.style.backgroundColor = '#9bc8df';
	})
}
)