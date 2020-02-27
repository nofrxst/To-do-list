const addbutton = document.querySelector('.addbutton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);

    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disable = true;
        input.classList.add('item_input');
        input.type="text";

        let itembox = document.createElement('div');
        itembox.classList.add('item');

        let editbutton = document.createElement('button');
        editbutton.innerHTML =  '<img src="./img/edit.png" height="20px" width="20px" alt="">';
        editbutton.classList.add('editbutton');

        let removebutton = document.createElement('button');
        removebutton.innerHTML = '<img src="./img/delete.png" height="20px" width="20px" alt="">';
        removebutton.classList.add('removebotton');

        container.appendChild(itembox);

        itembox.appendChild(input);
        itembox.appendChild(editbutton);
        itembox.appendChild(removebutton);

        editbutton.addEventListener('click' , () => this.edit(input));


        removebutton.addEventListener('click' , () => this.remove(itembox));

       
    }

    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
    
}

function check() {
    if(input.value != ""){
        new item(input.value);
        input.value = "";

    } 
}

addbutton.addEventListener('click' , check);
window.addEventListener('keydown' , (e) => {
        if(e.which == 13){
            check();
        }
})