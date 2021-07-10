const modal = document.querySelector('.modal');
const submitEdit = document.querySelector('.submit_edits');
const closeModal = document.querySelector('.leave');
const editInput = document.querySelector('#edit');

var deleteItem = [];
var editItem = [];

function update() {
    deleteItem = document.querySelectorAll('.delete_Item');
    editItem = document.querySelectorAll('.edit_Item');

    editItem.forEach((item) => {
        item.addEventListener('click', () => {
            modal.classList.add('active')
        })
    });

    deleteItem.forEach((item) => {
        item.addEventListener('click', () => {
            let id = item.id;
            item.id = "";

            for(let i = 0; i < lists.length; i++) {
                if(lists[i].id == id) {
                    lists.splice(i, 1);
                }
            }

            let parent = document.getElementById(id).parentElement;
            parent.parentElement.removeChild(parent);
        })
    });
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

submitEdit.addEventListener('click', () => {
    if(editInput.value != "") {
        modal.classList.remove('active');
    }
});

editInput.addEventListener('keypress', (keychar) => {
    if(editInput.value != "") {
        if (keychar.keyCode == 13) {
          modal.classList.remove('active');
        }
    } 
});