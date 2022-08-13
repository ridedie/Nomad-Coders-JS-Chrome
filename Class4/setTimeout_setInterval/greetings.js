const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetiog = document.querySelector("#greetiog"); //h1

//string만 포함된 변수와 중요하지 않는 변수는 대문자로 작성하는게 관례다
const HIDDEN_CLASSNAME ="hidden";

//String 철자가 틀릴 수 있기 때문에 변수로 지정한다.
const USERNAME_KEY = "username";


//function에 argument가 있게되면 이벤트 실행 시 argument에 이벤트 정보가 다 들어가 있다.
//preventDefault() 함수는 브라우저의 기본 동작(form이 submit이면 새로고침을 한다)//을 하지 못하게 막는다
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameThatTheUserWrote = loginInput.value;
    //브라우저에 내장되어 있는 작은 DB Key(이름), 값(값을 넣을 변수명)
    //새로고침해도 값이 저장되어있다
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
    paintGreetings(usernameThatTheUserWrote);
}

//greetiog.innerText = "Hello " + username;
//greetiog.innerText = `Hello ${username}`; //string끼리, 아님 string 변수 연결, 가장 중요한 점은 '', ""이게 아닌 물결표 `` (백틱)이다.
//greetiog.classList.remove(HIDDEN_CLASSNAME);
//위에 것을 함수로 요약했다
function paintGreetings(username) {
    greetiog.innerText = "Hello " + username;
    greetiog.classList.remove(HIDDEN_CLASSNAME);
}

//key(값의 이름)을 입력하면 값이 출력된다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //function() 괄호를 넣어버리면 브라우저는 자동으로 function을 실행한다.
    //submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}