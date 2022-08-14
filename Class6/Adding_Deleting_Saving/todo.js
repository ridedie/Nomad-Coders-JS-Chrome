const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

//toDos 배열을 로컬스토리지에 집어넣는다
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    //event에는 많은 정보를 담고 있다. 버튼의 부모가 누구인지 찾고 그 li를 삭제할 수 있다
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    //js에서 html
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li는 span이라는 자식을 가지게 되었다
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; //값을 저장
    toDoInput.value = ""; //엔터를 누른 후 input 비우기, 그 전 input값을 newTodo에 담겨져 있기 때문에 비워도 상관없다
    toDos.push(newTodo); //값을 toDos 배열에 넣는다
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);