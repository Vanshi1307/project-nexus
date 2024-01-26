document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const inputFields = form.querySelectorAll('input');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        const username = document.getElementById('email').value;
        const password = document.getElementById('password').value;

       
        if (username === 'vanshi' && password === 'garv') {
            alert('Submitted successfully');
           
        } else {
            alert('Username or password is wrong. Please try again.');
        }

       
        inputFields.forEach(function (input) {
            input.value = '';
        });
    });
});
