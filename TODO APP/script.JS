        // TODO  APP   


function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const todoText = todoInput.value.trim();
  
    if (todoText !== '') {
      const todoItem = document.createElement('li');
      todoItem.className = 'list-group-item';
      todoItem.appendChild(document.createTextNode(todoText));
      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  }
  