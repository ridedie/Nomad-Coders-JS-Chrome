const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

//function에 argument가 있게되면 이벤트 실행 시 argument에 이벤트 정보가 다 들어가 있다.
//preventDefault() 함수는 브라우저의 기본 동작(form이 submit이면 새로고침을 한다)//을 하지 못하게 막는다
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

//function() 괄호를 넣어버리면 브라우저는 자동으로 function을 실행한다.
//submit은 엔터를 누르거나 버튼을 클릭할 때 발생한다.
loginForm.addEventListener("submit", onLoginSubmit);


function handleLinkClick(event) {
    event.preventDefault();
}

link.addEventListener("click", handleLinkClick);
