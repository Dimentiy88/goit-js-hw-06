const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEL = document.querySelector("#ingredients");

const listEL = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

ulEL.append(...listEL);
console.log(ingredients);
