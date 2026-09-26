const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const count = document.querySelector('#task-count');
const emptyMessage = document.querySelector('#empty-message');

function updateListState() {
  const total = list.children.length;
  count.textContent = `${total} ${total === 1 ? 'tarefa' : 'tarefas'}`;
  emptyMessage.hidden = total > 0;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text === '') {
    input.value = '';
    input.focus();
    return;
  }

  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';
  checkbox.setAttribute('aria-label', `Concluída: ${text}`);

  const description = document.createElement('span');
  description.className = 'task-text';
  description.textContent = text;

  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'remove-task';
  removeButton.textContent = 'Remover';
  removeButton.setAttribute('aria-label', `Remover tarefa: ${text}`);
  item.append(checkbox, description, removeButton);
  list.appendChild(item);
  input.value = '';
  input.focus();
  updateListState();
});

function removeTask(event) {
  const button = event.target.closest('.remove-task');
  if (!button) return;
  const item = button.closest('li');
  if (!item || item.parentElement !== list) return;
  const nextItem = item.nextElementSibling || item.previousElementSibling;
  item.remove();
  updateListState();
  (nextItem ? nextItem.querySelector('.remove-task') : input).focus();
}

list.addEventListener('click', removeTask);
list.addEventListener('change', function (event) {
  const checkbox = event.target;
  if (!checkbox.matches('.task-checkbox')) return;
  checkbox.closest('li').classList.toggle('completed', checkbox.checked);
});
