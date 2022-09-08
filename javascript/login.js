const input = document.querySelector('.login-input');
var btn = document.querySelector('.login-btn');
var form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);