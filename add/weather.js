const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY="7a8a68f7eb602ae105d9cdbd3b541edf";

//성공했을 때 함수
function onGeoOk(position) {
    const  lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    console.log(url);
    //직접 url로 들어갈 필요없이 js가 이동한다
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

//위치를 받는데 문제가 발생했다면 알려주는 함수
function onGeoError() {

}

//wifi, gps, 위치 등등 정보를 준다.
//성공과 에러 함수를 적어준다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



