let text = document.querySelector(".list-text");
let input = document.querySelector(".input-text");
let button = document.querySelector(".input-button");
let counter = 0;
button.onclick = function () {
    if (input.value != 0) {


        counter++;
        text = document.createElement("p");
        text.classList.add("par");
        text.innerHTML += counter + ". " + input.value + " ";
        document.getElementsByTagName("div")[0].appendChild(text);
        document.getElementById('myInput').value = '';

        let search = document.getElementsByClassName("par");
        if (search != 0) {
            for (let i = 0; i < search.length; i++) {
                search[i].onclick = function () {
                    let del = document.createElement("button");
                    del.innerHTML = "Delete";
                    document.body.appendChild(del);
                    del.onclick = function () {
                        counter--;
                        search[i].remove();
                        edit.remove();
                        del.remove();
                        this.remove();
                    }

                    let edit = document.createElement("button");
                    edit.innerHTML = "Edit";
                    document.body.appendChild(edit);
                    edit.onclick = function () {
                        let editInput = document.createElement("input");
                        editInput.value = text.textContent;
                        document.body.appendChild(editInput);
                        editInput.addEventListener('change', updateValue);

                        function updateValue(editInput) {
                            search[i].textContent = this.value;
                            edit.remove();
                            del.remove();
                            this.remove();

                        }
                    }
                }
            }

        }
    }

};
