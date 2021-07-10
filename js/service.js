const modal = document.querySelector('.modal');
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
            
        })
    });
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

editInput.addEventListener('keypress', (keychar) => {
    
    if(editInput.value != "") {
        if (keychar.keyCode == 13) {
          modal.classList.remove("active");
        }
    } 
});