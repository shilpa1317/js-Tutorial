const todoInput = document.querySelector('#todo-input');
const addBtnElmt = document.querySelector('#add-button');
const todolist = document.querySelector('#todo-list');

addBtnElmt.addEventListener('click', () => {

    const task = todoInput.value.trim();

    if (task !== '') {

        const listitem = document.createElement('li');

        listitem.innerHTML = `${task}
        <button class="delete-button">Delete</button>`;

        todolist.append(listitem);

        const deletebutton = listitem.querySelector('.delete-button');

        deletebutton.addEventListener('click', () => {
            listitem.remove();
        });

        todoInput.value = '';
    }
});