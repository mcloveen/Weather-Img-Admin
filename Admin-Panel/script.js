let form = document.querySelector('form');
document.addEventListener("DOMContentLoaded", function () {
    let signInButton = document.querySelector(".sign");

    signInButton.addEventListener("click", function (event) {
        event.preventDefault();
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    });
});


form.addEventListener('submit', login)
let API_KEY = "AIzaSyBcE0PjvswO5DtlfjQhKIUb_yGkU4FaoSE";
let email = document.querySelector('#username').value;
let password = document.querySelector('#password').value

let user = {
    email,
    password,
    returnSecureToken: true
}

async function register(e) {
    e.preventDefault();
    let API_KEY = "AIzaSyBcE0PjvswO5DtlfjQhKIUb_yGkU4FaoSE";
    let email = document.querySelector('#username').value;
    let password = document.querySelector('#password').value




    try {

        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {

            method: "Post",
            body: JSON.stringify(user),

        });

        let result = await response.json();

        console.log(result.error);


    } catch (err) {
        console.log(err);
    }




}

async function login(e) {
    e.preventDefault();

    let API_KEY = 'AIzaSyBcE0PjvswO5DtlfjQhKIUb_yGkU4FaoSE';
    let email = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    let user = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    try {
        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {

            method: 'POST',
            body: JSON.stringify(user)
        });

        let result = await response.json();
        if (result.idToken) {
            location.replace('/Users/mcloveen/Desktop/Form-cool/products.html')
        }
    } catch (err) {
    }

}