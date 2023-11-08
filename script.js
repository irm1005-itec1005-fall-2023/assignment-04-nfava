/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
let todoItems = [];
let nextID = 1;



// DOM Elements
//let appContainer = document.getElementById(appID);
let todoList = document.getElementById("TodoList");
let todoInput = document.getElementById("TodoInput");
let addTodoButton = document.getElementById("addTodo");
//
// Functions
//



function renderTodoList() {
for (const todo of todoItems){
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>${todo.id}</span>
  <button data-id="${todo.id}" class="delete-btn">Delete</button>`;

  if (todo.completed){
    listItem.classList.add("completed");
  }
  todoList.appendChild(listItem);
}

}

function handleAddTodo(){
  const text = todoInput.value.trim();
  
  if(text !==""){
    addTodoItem(text);
    console.log(todoItems);
    todoInput.value = "";
    renderTodoList();

  }
}
const addButton = document.getElementById("addTodo");
addButton.addEventListener("click", handleClick);
function handleClick() {

const myText =  todoInput.value;
console.log("button clicked", myText);


//  if(event.target.classList.contains("delete-btn")){
  //  const todoId = parseInt(event.target.getAttribute(data-id));
    //deleteTodoItem(todoId);
    //renderTodoList();
  
}

function addTodoItem(text){
  let todo = {
    id: nextID,
    text: text,
    completed: false,
  };
  todoItems.push(todo);
  nextID++;
  console.log(todoItems);
}
//
// Inits & Event Listeners
//

addTodoButton.addEventListener("click", handleAddTodo);
todoList.addEventListener("click",handleClick);