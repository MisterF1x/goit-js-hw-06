const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.value = '';
inputEl.addEventListener('input', (e) => {
    return outputEl.textContent = !e.currentTarget.value.trim() ? 'Anonymous' : e.currentTarget.value;
});