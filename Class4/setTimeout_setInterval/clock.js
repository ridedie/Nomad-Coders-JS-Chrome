const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
  clock.innerText = (date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds());
}

getClock();
//serInterval 일정 간격을 두고 실행하는 함수
//2개의 인자, 1. 실행하고자하는 함수 2. 간격을 ms로 나타내기
setInterval(getClock, 1000);

//일정 시간 지난 후 실행
//2개의 인자 1.실행하고자하는 함수, 2.얼마나 기다릴지 ms로 나타내기
setTimeout(getClock, 5000);
