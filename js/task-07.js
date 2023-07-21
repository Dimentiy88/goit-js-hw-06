const inputControl = document.getElementById("font-size-control");
const abracadabra = document.getElementById("text");

inputControl.addEventListener("input", (e) => {
  abracadabra.style.fontSize = `${e.target.value}px`;
});
