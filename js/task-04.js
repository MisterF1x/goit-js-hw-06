let countValue = 0;
const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value')
};
refs.btnDecrement.addEventListener('click', () => {
    countValue -= 1;
    refs.valueEl.textContent = countValue;
});
refs.btnIncrement.addEventListener('click', () => {
    countValue += 1;
    refs.valueEl.textContent = countValue;
});