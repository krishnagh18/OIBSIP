const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);
        taskInput.value = '';
    }
});

function createTaskItem(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => completeTask(li));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(li));

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    return li;
}

function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
    completedTasksList.appendChild(taskItem);
}

function deleteTask(taskItem) {
    if (taskItem.parentElement === pendingTasksList) {
        pendingTasksList.removeChild(taskItem);
    } else if (taskItem.parentElement === completedTasksList) {
        completedTasksList.removeChild(taskItem);
    }
}