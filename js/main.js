let text = document.querySelector(".list-text");
let input = document.querySelector(".input-text");
let button = document.querySelector(".input-button");
button.addEventListener("click", function () {
    if (input.value != 0) {
        list = Add();
        Delete();
        Edit();
        // Check();
        input.value = '';
    }
});
function Add() {

    let list = document.createElement("li");
    list.classList.add('text-left', 'text-light', 'd-flex', 'border-bottom', 'border-light', 'mr-5', 'mb-2');
    text.appendChild(list);

    let customControl = document.createElement("div");
    customControl.classList.add('custom-control', 'custom-checkbox');
    list.appendChild(customControl);


    let checkbox = document.createElement("input");
    checkbox.classList.add('checkbox', 'custom-control-input');
  checkbox.setAttribute("id", "customControlAutosizing");
    checkbox.type = "checkbox";
    customControl.appendChild(checkbox);

    let someList = document.createElement("label");
    someList.classList.add('someList', 'text-light', 'mt-2','custom-control-label');
    someList.innerHTML = input.value;
    
    someList.setAttribute("for", "customControlAutosizing");
    someList.classList.add('someList');
    customControl.appendChild(someList);

    let edit = document.createElement("button");
    edit.classList.add('edit', 'ml-2', 'mb-2',  'btn', 'btn-outline-info', 'active');
    edit.innerHTML = "Edit";
    list.appendChild(edit);
    let del = document.createElement("button");
    del.classList.add('delete', 'ml-2', 'mb-2', 'close', 'btn', 'btn-info');
    list.appendChild(del);
    let close = document.createElement("span");    
    close.setAttribute('aria-hidden', 'true');
    close.innerHTML = '&times';
    del.appendChild(close);

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

        let inputGroup = document.createElement("div");
        inputGroup.classList.add('input-group', 'mb-2');
        list.appendChild(inputGroup);

        let editInput = document.createElement("input");
        editInput.type = "text";
        editInput.classList.add('editInput', 'form-control');
        inputGroup.appendChild(editInput);

        someList = list.querySelector('label.someList');
        editInput.value = someList.innerHTML;

        let inputGroupAppend = document.createElement("div");
        inputGroupAppend.classList.add('input-group-append');
        inputGroup.appendChild(inputGroupAppend);

        let save = document.createElement("input");
        save.type = "button";
        save.classList.add( 'btn', 'btn-outline-info', 'active');
        save.value = "Save";
        inputGroupAppend.appendChild(save);

        save.onclick = function () {
            someList.innerHTML = editInput.value;
            editInput.remove();
            save.remove();
        }
    }
};
// function Check() {
//     customControl = list.querySelector('input.customControl');
//     someList = customControl.querySelector('label.someList');
//     let isChecked = false;
//     someList.addEventListener("click", function () {
//         someList = this;
//         list = this.parentNode;
//         if (isChecked === false) {
//             checkbox = customControl.querySelector('input.checkbox');
         
//             someList.style.textDecoration = "line-through";
//             isChecked = true;
//         } else {
//             isChecked = false;
//             someList.style.textDecoration = "none";
//             checkbox.removeAttribute("id");
//         }
//     })
// };
