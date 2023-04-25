// 1. Capturar el evento 'click' en el botón. En este caso no me importa el objet 'event' porque no quiero conocer nada sobre el botón
document.querySelector("#btn").addEventListener("click", function () {
  console.log("has hecho click!");
  // 2. Recuperar el valor que el usuario ha introducido en el input y mostrarlo también por consola. Guardarlo en una variable también.
  const word = document.querySelector("#str").value;
  // 3. Poner el número de carácteres en el div#output

  const length = word.length;
  document.querySelector("#output").textContent = length;
});
