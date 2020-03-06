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

        var someList = document.createElement("p");
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
    }
    function Edit() {
        edit = list.querySelector('button.edit');
        edit.onclick = function () {
            edit = this;
            list = this.parentNode;
            let editInput = document.createElement("input");
            editInput.type = "text";
            list.appendChild(editInput);
            someList = list.querySelector('p.someList');
            editInput.value = someList.innerHTML;
            editInput.addEventListener('change', updateValue);
            function updateValue() {
                someList.innerHTML = this.value;
                editInput.remove();
            }
        }
    };


