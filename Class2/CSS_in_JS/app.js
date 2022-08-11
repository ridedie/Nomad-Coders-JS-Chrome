const h1 = document.querySelector(".h1 h1");


//JS에서 CSS를 작업한다.  style은 CSS에서 작업하는 것이 적합하다
/*
function handleTitleClick1() {
    const currentColor = h1.style.color
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick1);
*/


//CSS를 이용하여 JS 이벤트 간단하게 만들기
//변수명은 같아야하기 때문에 철자가 틀리면 오류를 발생한다. 변수를 저장해두면 오류는 적어진다.
//className은 class를 상관하지 않고 name을 변경해버린다.
//classList는 class 내용물을 조작하는 것을 허용한다.

/*
function handleTitleClick2() {
    const clickedClass1 = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else  {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick2);
*/


//toggle function은 class name이 존재하는지 확인한다.
//class name이 존재한다면 toggle은 class name을 제거하고 반대로 추가한다.
function handleTitleClick3() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick3);