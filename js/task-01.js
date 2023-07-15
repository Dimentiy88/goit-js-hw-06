const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories:${totalCategories.length}`);

totalCategories.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent} 
Elements: ${el.lastElementChild.children.length}`
  );
});
