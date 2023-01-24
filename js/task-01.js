const categoryEl = document.querySelectorAll('.item');
const showCategories = () => {
    categoryEl.forEach(el => {
        console.log(`Category: ${el.firstElementChild.textContent}`);
        console.log(`Elements: ${el.lastElementChild.children.length}`);
    });
}
console.log(`Number of categories: ${categoryEl.length}`);
showCategories();
