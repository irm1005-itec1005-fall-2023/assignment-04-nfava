/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */
// Variables
let todoItems = [];
let nextID = 1;



// DOM Elements

let todoList = document.getElementById("TodoList");
let todoInput = document.getElementById("TodoInput");
let addTodoButton = document.getElementById("addTodo");

// Functions
function displayNotification(message) {
  const notificationElement = document.getElementById("notification");
  notificationElement.textContent = message;
}

function renderTodoList() {
  todoList.innerHTML = "";
  
for (const todo of todoItems){
  const listItem = document.createElement("li");
  listItem.innerHTML = 
  `<h2>${todo.text}</h2>
  <span>${todo.id}</span>
  <button data-id="${todo.id}" class="delete-btn">Delete</button>
  <button data-id="${todo.id}" class="Complete-btn">Completed</button>
  `;

  if (todo.completed){
    listItem.classList.add("completed");
  }
  todoList.appendChild(listItem);
}
if (todoItems.length > 0) {
  const lastAddedTask = todoItems[todoItems.length - 1].text;
  displayNotification(`New task added: "${lastAddedTask}"`);
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
addButton.addEventListener("click", handleAddTodo);

function handleClick(event) {
const myText =  todoInput.value;
console.log("button clicked", myText);

 if(event.target.classList.contains("delete-btn")){
    const todoId = parseInt(event.target.getAttribute("data-id"));
    deleteTodoItem(todoId);
    renderTodoList();
    console.log(todoItems);
  } else  if (event.target.classList.contains("Complete-btn")) {
    const todoId = parseInt(event.target.getAttribute("data-id"));
    markToDoItemAsCompleted(todoId);
    renderTodoList();
    console.log(todoItems);
  }
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

function markToDoItemAsCompleted(todoId) {
  const itemIndex = todoItems.findIndex((todo) => todo.id === todoId);

  if (itemIndex !== -1) {
    todoItems[itemIndex].completed = true;
    
  }
}

function deleteTodoItem(todoId) {
  todoItems = todoItems.filter((todo) => todo.id !== todoId);
}

// Inits & Event Listeners
addTodoButton.addEventListener("click", handleAddTodo);
todoList.addEventListener("click",handleClick);