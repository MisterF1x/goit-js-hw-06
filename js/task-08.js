
const formEl = document.querySelector('.login-form');
let data = {};

const handleSubmit = e => {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;
    if (!email.value || !password.value) {
        return alert('Please fill in all the fields!');
    }
    data = {
        email: email.value,
        password: password.value
    }
    console.log(data);
    e.currentTarget.reset();

}
formEl.addEventListener('submit', handleSubmit);