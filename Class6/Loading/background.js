const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];


//js에서 html 태그 createElement
const bgImg = document.createElement("img");
bgImg.src = `./img/${chosenImg}`;


//body에 html 추가
document.body.appendChild(bgImg);