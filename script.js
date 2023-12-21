// adding a new task with the help of addTask function
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <input type="checkbox" onchange="completeTask(this)">
        <span>${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(newTask);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  // Marking and unmarking the complete or incomplete task with the help of completeTask function
  function completeTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }
  }
  
  // editing the task with the help of editTask function
  function editTask(editButton) {
    const taskText = editButton.previousElementSibling;
    const newText = prompt('Edit task:', taskText.textContent.trim());
    if (newText !== null && newText.trim() !== '') {
      taskText.textContent = newText;
    }
  }
  
  // deleting the task with help of deleteTask Function
  function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    const taskList = taskItem.parentElement;
    taskList.removeChild(taskItem);
  }
  