//object로 표시한 element를 보여준다.
//console.dir(title);


//
const title  = document.querySelector(".title");
title.style.color = "green";


//Click 이벤트

function handleTilteClilck() {
    console.log("title was clicked!");
    title.style.color = "blue";
}
title.addEventListener("click", handleTilteClilck);


//hover 이벤트 영역 안에 마우스를 올려두기만 해도 함수 실행됨
function handleMouseEnter() {
   title.innerText = "Mouse is here!";
}

title.addEventListener("mouseenter", handleMouseEnter);


function handleMounseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("mouseleave", handleMounseLeave);