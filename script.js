/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

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

function addToDoItem(text) {
  // Implement the logic to add a task here
  let todo = {
    id: nextID,
    text: text,
    completed: false,
  };
  todoItems.push(todo);
  nextID++;
  console.log(todoItems);
}

function removeToDoItem(todoId) {
  // Implement the logic to add a task here
for (let i = 0; 1 < todoItems.length; i++){

  if(todoItems[i].id === todoId){

  todoItems.splice(i,1);
   break;
  }
  }
}

//
// Inits & Event Listeners
//
inititialise();