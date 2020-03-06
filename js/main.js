let text = document.querySelector(".list-text");
let input = document.querySelector(".input-text");
let button = document.querySelector(".input-button");
button.onclick = function () {
    if (input.value != 0) {

        let list = document.createElement("li");
        text.appendChild(list);

        let someList = document.createElement("p");
        someList.innerHTML = input.value;
        list.appendChild(someList);

        let del = document.createElement("button");
        del.innerHTML = "Delete";
        list.appendChild(del);
        del.onclick = function () {
           text.removeChild(list);  
        }
        let edit = document.createElement("button");
        edit.innerHTML = "Edit";
        list.appendChild(edit);
        edit.onclick = function () {
            let editInput = document.createElement("input");
            editInput.type = "text";
            list.appendChild(editInput);
            edit = this;
            editInput.value = someList.innerHTML;
            editInput.addEventListener('change', updateValue);
            function updateValue() {
                someList.innerHTML = this.value;
                editInput.remove();
            }   
        }   
       input.value = '';   
    }
};

// 55


