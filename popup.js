document.addEventListener('DOMContentLoaded', function () {
  const todoList = document.getElementById('todo-list');
  const newTodoInput = document.getElementById('new-todo');
  const addBtn = document.getElementById('add-btn');

  addBtn.addEventListener('click', function () {
    const newTodoText = newTodoInput.value.trim();
    if (newTodoText !== '') {
      const todoItem = document.createElement('li');
      todoItem.innerText = newTodoText;
      todoList.appendChild(todoItem);
      newTodoInput.value = '';
    }
  });
});
