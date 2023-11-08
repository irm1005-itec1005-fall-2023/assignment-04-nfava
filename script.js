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
let appContainer = document.getElementById(appID);
let todoList = document.getElementById("TodoList");
let todoInput = document.getElementById("TodoInput");
let addTodoButton = document.getElementById("addTodo");
//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

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
    todoInput.value = "";
    renderTodoList();
  }
}

function handleClick() {
  if(event.target.classList.contains("delete-btn")){
    const todoId = parseInt(event.target.getAttribute(data-id));
    deleteTodoItem(todoId);
    renderTodoList();
  }
}

//
// Inits & Event Listeners
//
inititialise();

addTodoButton.addEventListener("click", handleAddTodo);
todoList.addEventListener("click",handleClick);