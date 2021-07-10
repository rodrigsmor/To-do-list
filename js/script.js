const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

newListForm.addEventListener('submit', function(e) {
    e.preventDefault();
 
    const listName = newListInput.value;
    if(listName === null || listName === '') return;
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    
    render()
    update()
});

function createList(name) {
    return {
        id: Date.now().toString(),
        name: name
    }
}

function render() {
    clearElement(listContainer);

    lists.forEach(function(list) {
        const elementItem = document.createElement('div');
        elementItem.classList.add('element');

        listContainer.appendChild(elementItem);

        const input = document.createElement('input');

        input.type = "checkbox";
        input.name = "item_toDo";
        input.id = "to-do_checkbox";

        elementItem.appendChild(input);

        const label = document.createElement('label');
        label.htmlFor = "item_toDo";
        label.innerText = list.name;
        label.id = list.id;
        elementItem.appendChild(label);

        const divButtons = document.createElement('div');
        elementItem.appendChild(divButtons);

        const trashButton = document.createElement('button');
        trashButton.classList.add('delete_Item');
        trashButton.id = list.id;
        trashButton.innerHTML = "<i class='bx bx-trash-alt'></i>";
        divButtons.appendChild(trashButton);

        const pencilButton = document.createElement('button');
        pencilButton.classList.add('edit_Item');
        pencilButton.innerHTML = "<i class='bx bx-pencil'></i>";
        divButtons.appendChild(pencilButton);
    });
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}