const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");
const toDolist = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    toDoInput.value = "";
}

toDoform.addEventListener("submit", handleTodoSubmit);