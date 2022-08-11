//object로 표시한 element를 보여준다.
//console.dir(title);


//사용자가 어떤 액션을 취했을 때(복사, 붙여넣기, 마우스로 클릭, 위에 올려두기 등등)
//이벤트가 발생한다. title() 함수의 실행버튼을 직접 누르지 않아도 된다.
//JS에서도 style을 바꿀 수 있다.
const h1  = document.querySelector(".h1");
h1.style.color = "green";


//Click 이벤트

function handleTilteClilck() {
    console.log("h1 was clicked!");
    h1.style.color = "blue";
}
h1.addEventListener("click", handleTilteClilck);
//h1.onclick = handleh1Click; 사용해도 된다.


//hover 이벤트 영역 안에 마우스를 올려두기만 해도 함수 실행됨
function handleMouseEnter() {
   h1.innerText = "Mouse is here!";
}

h1.addEventListener("mouseenter", handleMouseEnter);

//mouseleave 마우스가 영역 밖으로 이동하게 된다면 이벤트 실행하기
function handleMounseLeave() {
    h1.innerText = "Mouse is gone!";
}

h1.addEventListener("mouseleave", handleMounseLeave);



//window window가 resize(화면크기가 바뀜)이 될 경우 실행됨
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);


//copy 복사 이벤트
function handleWindowCopy() {
    alert("don't copy");
}
window.addEventListener("copy", handleWindowCopy);


//인터넷 연결이 되지 않으면 함수가 실행됨
function handleWindowOffline() {
    alert("SoS no WIFI");
}
window.addEventListener("offline", handleWindowOffline);



//인터넷 연결이 성공하면 함수가 실행됨
function  handleWindowOnline() {
    alert("All Good");
}

window.addEventListener("offline",handleWindowOnline);