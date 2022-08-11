// 보통 const로 작성하는 것이 좋다  var는 규칙이 없기 때문에 안쓰는 것이 좋다
const a = 5;
const b = 10;

console.log(a*b);


let c = 5;
let d= 3;

console.log(c+d);

c = 4;
d = 8;

console.log(c+d);


// boolean 0, 1 ture false

const amIFat = true;
let something = null;

console.log(amIFat);


// 배열

const mon = "mon";
const tue = "tue";
const wed = "wed";
let daysOfWeek = mon + tue + wed;

console.log(daysOfWeek);


daysOfWeek = ["mon", "tue", "wed"];

console.log(daysOfWeek[2]);


//Add on more day to the array
daysOfWeek.push("thu");

console.log(daysOfWeek);



//Objects property가진 데이터, 배열과는 다르게 설명을 지정할 수 있다.

const playeName = "nico"
const playerPoints = 1212;
const playerHandsome = false;
const playerFat = "little bit";

const player1 = ["nico", 1212, false, "little bit"];

const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["fat"]);

player.fat = false;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);



//functions은 코드를 캡슐롸해서 실행을 여러 번 할 수 있게 도와줌
//argument에서 값인 nico, 20이 함수 nameOfPerson 변수로 담겨지게 되고 함수에 있는 출력 명령을 통해 줄력하게 된다. 변수 순서 중요

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 20);
sayHello("dal", 43);


function plus(e, f) {
    console.log(e+f);
}

plus(8, 321);


function divide (first, second) {
    console.log(first, second);
}

divide(345, 74);


const players = {
    name: "nico",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

console.log(players.name);
players.sayHello("lynn");


const  calculator = {
    plus: function (a, b){
        return a + b;  
    },

    minus: function (a, b){
        return a - b;  
    },

    multiply: function (a, b){
        return a * b;  
    },

    divide: function (a, b){
        return a / b; 
    },

    powerof: function (a, b){
        return a ** b; 
    },
};

const plusResult1 = calculator.plus(42, 5);
const plusResult2  = calculator.minus(557, 12);
const plusResult3  = calculator.multiply(785, 32);
const plusResult4  = calculator.divide(plusResult1, 24);
const plusResult5  = calculator.powerof(6, plusResult4);
console.log(plusResult1);
console.log(plusResult2);
console.log(plusResult3);
console.log(plusResult4);
console.log(plusResult5);

//calculatoKrAge 실행 96이라는 Argument가 age 자리로 대체가 되고, 리턴으로 96+2, 함수를 호출하는 변수 krAge가 값인 98을 담게된다. 
const age = 96;
function calculatoKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculatoKrAge(age);
console.log(krAge);


//조건문

//prompt 사용자에게 창을 띄울 수 있게 해줌, 2개를 작성하는데 문자, default,  메세지를 보여주고 값을 입력하라고 하는 input type이다 CSs를 줄 수 없고, 브라우저를 멈춘다. 그러기에 이제는 사용하지 않는다.
const age1 =prompt("How old are you?");

//typeof를 쓰면 입력한 값의 타입을 볼 수 있다. spring이 기본값, parseInt()를 쓰면 spring을 num으로 변환한다.
console.log(typeof age1, typeof parseInt("15"));

//isNaN 인자로 받은 값이 숫자가 아니면 true를 반환한다
const age2 = parseInt(prompt("How old are you?"));
console.log(isNaN(age2));


if (isNaN(age2)) {
    console.log("Please write a Number");
} else {
    console.log("Thank you writing your age.")
}


//&& 그리고(and), || 아니면(or)
if (isNaN(age2) || age2 < 0) {
    console.log("Please write a real positive number");
} else if (age2 < 18) {
    console.log("You are too young.");
} else if (age2 >= 18 && age2 <= 50)  {
    console.log("You can drink")
} else if (age2 > 50 && age2 <= 80) {
    console.log("You should exercise");
} else if (age2 > 80) {
    console.log("You can do hatever you want.");
} else {
    console.log("You can't drink");
}
