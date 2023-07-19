const inputEl = document.getElementById("validation-input");
const inputLength = inputEl.dataset.length;
console.log(inputEl.getAttribute("data-length"));

const input = document.getElementById("input");
inputEl.addEventListener("change", (e) => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
