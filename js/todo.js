const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click",deleteTodo);
    li.appendChild(span);
    li.appendChild(button);    
    toDolist.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;    
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoform.addEventListener("submit", handleToDoSubmit);