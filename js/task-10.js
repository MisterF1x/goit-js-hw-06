// Функція рандомного визначення кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Пошук необхідних елементів
const refs = {
  btnCreate: document.querySelector('[data-create]'),
  btndestroy: document.querySelector('[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('[type="number"]')
}
// Деструктирізація знайдених елементів
const { btnCreate, btndestroy, boxEl, inputEl } = refs;

let height = 20; //Оголошення змінної початкового значення висоти
let width = 20;  //Оголошення змінної початкового значення ширини

// Функція створення боксів
function createBoxes(amount) {
  const boxes = []; //Масив для збереження стилів елементів
  
  // Цикл створення обєкту стилів майбутніх елементів
  for (let i = 0; i < amount; i += 1) {
    const objStyle = {
      height: height += 10,
      width: width += 10,
      backgroundColor: getRandomHexColor()
    }

    boxes.push(objStyle); //Додаємо в масив обєкт стилів   
  }
  // Створення колекції елементів зі стилями
  const elements = boxes
    .map(({ height, width, backgroundColor }) => {
    return `
    <div style='height:${height}px; width:${width}px; background-color:${backgroundColor};'></div>`
    })
    .join('');
  return elements; //Повертаємо колекцію
}

// Функція видалення боксів
function destroyBoxes() {
  boxEl.innerHTML = '';
};

// Оголошення слухача події для створення боксів
btnCreate.addEventListener('click', () => {
  const elements = createBoxes(inputEl.value);
  boxEl.insertAdjacentHTML('beforeend', elements);
});

// Оголошення слухача події для видалення боксів
btndestroy.addEventListener('click', () => {
  inputEl.value = '';
  height = 20;
  width = 20;
  destroyBoxes();
});