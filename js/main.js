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
    list.classList.add('text-left', 'text-light', 'border-bottom', 'border-light', 'mr-5');
    text.appendChild(list);
    let checkbox = document.createElement("input");
    checkbox.classList.add('checkbox');
    checkbox.type = "checkbox";
    list.appendChild(checkbox);
    let someList = document.createElement("label");
    someList.classList.add('someList', 'text-light');
    someList.innerHTML = input.value;
    someList.classList.add('someList');
    list.appendChild(someList);
    let edit = document.createElement("button");
    edit.classList.add('edit', 'm-2', 'bg-info', 'text-light', 'border-light');
    edit.innerHTML = "Edit";
    list.appendChild(edit);
    let del = document.createElement("button");
    del.classList.add('delete', 'm-2', 'bg-info', 'text-light', 'border-light');
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

        let editInput = document.createElement("input");
        editInput.type = "text";
        editInput.classList.add('editInput', 'bg-info', 'text-light', 'border-light');
        list.appendChild(editInput);
        someList = list.querySelector('label.someList');
        editInput.value = someList.innerHTML;
        let save = document.createElement("button");
        save.classList.add('ml-2', 'bg-info', 'text-light', 'border-light');
        save.innerHTML = "Save";
        list.appendChild(save);
        save.onclick = function () {
            someList.innerHTML = editInput.value;
            editInput.remove();
            save.remove();
        }
    }
};
function Check() {
    someList = list.querySelector('label.someList');
    let isChecked = false;
    someList.addEventListener("click", function () {
        someList = this;
        list = this.parentNode;
        if (isChecked === false) {
            checkbox = list.querySelector('input.checkbox');
            checkbox.setAttribute("checked", "checked");
            someList.style.textDecoration = "line-through";
            isChecked = true;
        } else {
            isChecked = false;
            someList.style.textDecoration = "none";
            checkbox.removeAttribute("checked");
        }
    })
};
