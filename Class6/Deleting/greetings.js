const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetiog = document.querySelector("#greetiog"); //h1

const HIDDEN_CLASSNAME ="hidden";


const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameThatTheUserWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
    paintGreetings(usernameThatTheUserWrote);
}


function paintGreetings(username) {
    greetiog.innerText = "Hello " + username;
    greetiog.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}