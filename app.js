// Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
  form.addEventListener('submit', addTask); // Add Task event
  taskList.addEventListener('click', removeTask) // Removes Task event
  // clearBtn.addEventListener('click', clearTasks);
  // filter.addEventListener('change', filterTasks)
}

function addTask(e){
  if(taskInput.value === '') {
    alert('Add a task');
  }
  e.preventDefault();

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  
  // Add create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add delete icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm("Are you sure?")){
      e.target.parentElement.parentElement.remove()
    }
  }
}