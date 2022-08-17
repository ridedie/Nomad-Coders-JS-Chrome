const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = [];

//toDos 배열을 로컬스토리지에 집어넣는다
//아래코드를 쓰지 않으면 배열로 저장되는 것이 아닌 text로 저장된다. 
//JSON.stringify() js object, array 등등 JSON표기법을 따르는 string으로 만든다
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    //event에는 많은 정보를 담고 있다. 버튼의 부모가 누구인지 찾고 그 li를 삭제할 수 있다
    const li = event.target.parentElement;
    li.remove();
    //li.id는 string todo.id number
    //한 요소를 삭제하고 싶다면 그 요소를 제외한 나머지 요소들을 가지고 새로운 배열을 만든다. false를 리턴하면 그 요소는 새로운 배열에 포함되지 않는다
    //반드시 true를 반환해야한다.
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    //js에서 html
    const li = document.createElement("li");
    li.id = newTodo.id;
    const button = document.createElement("button");
    button.innerText = "X";
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span); //li는 span이라는 자식을 가지게 되었다
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //값을 저장
    toDoInput.value = ""; //엔터를 누른 후 input 비우기, 그 전 input값을 newTodo에 담겨져 있기 때문에 비워도 상관없다
    //text로 저장하지 않고 object로 저장한다.
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj); //toDos배열에 newToDoObj를 추가
    paintToDo(newToDoObj); //paintToDo에는 text를 주는 것이 아닌 newToDoObj를 준다.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
   

const savedToDos = localStorage.getItem(TODOS_KEY);

//위에서 JSON에서 string으로 만들었고 지금은 그 string을 JSON.parse를 이용해서 배열로 만든다.
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //forEach는 array의 각 object에 대해 함수를 실행한다 함수를 여러번 실행하는 것이 아니다. 함수를 한번 실행하면 배열의 요소마다 실행한다.
    // => 화살표함수 함수와 마친가지다
    parsedToDos.forEach(paintToDo);
  }


