const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  span.textContent = event.target.value;

  if (event.target.value === "") {
    span.textContent = "Anonymous";
  }
});
