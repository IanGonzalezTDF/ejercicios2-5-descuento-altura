rotulo1.innerHTML = "Ingresar altura";

let boton = document.getElementById("enviar");
boton.addEventListener("click", () => {
  let alturaPermitida: number = 1.3;
  let alturaPersona: number = dato.value;

  if (alturaPersona <= alturaPermitida) {
    console.log("La persona NO puede pasar");
  } else {
    console.log("La persona puede pasar");
  }
});
