//Alert Box
alert("Bienvenida a mi página interactiva");

//Que cambie un mensaje cuando haga click en un botón
function mostrarMensaje(){
    let mensaje = document.getElementById("mensaje").textContent="¡Gracias por hacer click!";
  }
  
  let boton = document.getElementById("boton");
  boton.addEventListener("click", mostrarMensaje);


  //Cambiar color del fondo
  document.getElementById("colorButton").addEventListener("click", function() {
    // Cambia el color de fondo de la página al azar cuando se hace clic en el botón
    const colors = ["#E6746C", "#F3C486", "#F2EBBF", "#8CBEB2", "#389C9B"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});



  

