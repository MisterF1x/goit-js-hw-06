function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.body,
  btnChange: document.querySelector('.change-color'),
  outputEl: document.querySelector('.color')
}
const { body, btnChange, outputEl } = refs;
const changeColor = () => {
  const getColor = getRandomHexColor();
  body.style.backgroundColor = getColor;
  outputEl.textContent = getColor;
}
btnChange.addEventListener('click', changeColor);