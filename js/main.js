let text = document.querySelector(".list-text");
let input = document.querySelector(".input-text");
let button = document.querySelector(".input-button");
button.addEventListener("click", function () {
    if (input.value != 0) {
        list = Add();
        Delete();
        Edit();
        Check();
        input.value = '';
    }
});
function Add() {
    let list = document.createElement("li");
    text.appendChild(list);
    let checkbox = document.createElement("input");
    checkbox.classList.add('checkbox');
    checkbox.type = "checkbox";
    list.appendChild(checkbox);
    let someList = document.createElement("span");
    someList.classList.add('someList');
    someList.innerHTML = input.value;
    someList.classList.add('someList');
    list.appendChild(someList);
    let edit = document.createElement("button");
    edit.classList.add('edit');
    edit.innerHTML = "Edit";
    list.appendChild(edit); 
    let del = document.createElement("button");
    del.classList.add('delete');
    del.innerHTML = "Delete";
    list.appendChild(del);
    
    return list;
};
function Delete() {
    del = list.querySelector('button.delete');
    del.onclick = function () {
        list = this.parentNode;
        text.removeChild(list);
    }
};
function Edit() {
    edit = list.querySelector('button.edit');
    edit.onclick = function () {
        if (list.querySelector(".editInput")) {
            return;
        }
        edit = this;
        list = this.parentNode;
        let editType = document.createElement("p");
        editType.classList.add('editInput');
        list.appendChild(editType);
        let editInput = document.createElement("input");
        editInput.type = "text";
        editType.appendChild(editInput);
        someList = list.querySelector('span.someList');
        editInput.value = someList.innerHTML;
        let save = document.createElement("button");
        save.innerHTML = "Save";
        editType.appendChild(save);
        save.onclick = function () {
            someList.innerHTML = editInput.value;
            editType.remove();
        }
    }
};
