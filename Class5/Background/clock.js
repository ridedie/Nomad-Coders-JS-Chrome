const clock = document.querySelector("h2#clock");

//string 부분에 길이를 임의로 지정해서 그것보다 짧으면 앞에 문자열을 붙인다 padStart
//string 부분에 길이를 임의로 지정해서 그것보다 짧으면 뒤에 문자열을 붙인다 padEnd
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//serInterval 일정 간격을 두고 실행하는 함수
//2개의 인자, 1. 실행하고자하는 함수 2. 간격을 ms로 나타내기
setInterval(getClock, 1000);

//일정 시간 지난 후 실행
// 2개의 인자 1.실행하고자하는 함수, 2.얼마나 기다릴지 ms로 나타내기
//setTimeout(getClock, 5000);