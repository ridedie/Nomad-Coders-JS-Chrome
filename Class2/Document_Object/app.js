//HTML을 접근할 때 사용한다. 
//html id, class가 js에 있는 id, class 이름과 같아야 한다
const title = document.getElementById("title");

console.log(title);


title.innerText = "Got you!";


const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const titltltle = document.getElementsByTagName("h1")
console.log(titltltle);


// querySelector는 element를 CSS방식으로 검색할 수 있다
//아래 뜻은 Class hello에서 h1태그를 가져와야한다는 뜻이다
//같은 클래스가 여러개라면 첫 번째 것만 가져온다. 다 가져오려면 querySelectorAll을 쓰면 된다.
const selecter = document.querySelector(".hello h1:first-child");
console.log(selecter);


//같은 말이다
const title = document.getElementById("title");
const selecterr = document.querySelector("#title");


//object로 표시한 element를 보여준다.
console.dir(hellos);