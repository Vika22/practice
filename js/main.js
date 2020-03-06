let text = document.querySelector(".list-text");
let input = document.querySelector(".input-text");
let button = document.querySelector(".input-button");
button.addEventListener("click", function(){
    if (input.value != 0) {
        list =  Add();
        Delete();
        Edit();
        input.value = '';
    }
});

    function Add() {
        let list = document.createElement("li");
        text.appendChild(list);

        let someList = document.createElement("span");
        someList.innerHTML = input.value;
        someList.classList.add('someList');
        list.appendChild(someList);

        let del = document.createElement("button");
        del.classList.add('delete');
        del.innerHTML = "Delete";
        list.appendChild(del);
     
        let edit = document.createElement("button");
        edit.classList.add('edit');
        edit.innerHTML = "Edit";
        list.appendChild(edit);

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
            edit = this;
            list = this.parentNode;
            let editInput = document.createElement("input");
            editInput.type = "text";
            list.appendChild(editInput);
            someList = list.querySelector('span.someList');
            editInput.value = someList.innerHTML;
            let save = document.createElement("button");
            save.innerHTML = "Save";
            list.appendChild(save);
            save.onclick = function () {
                someList.innerHTML = editInput.value;
                editInput.remove();
                save.remove();
            }
        }
    };


