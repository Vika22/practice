let addField = document.getElementById('add');
let inputText = document.getElementById('text');
let list = document.getElementById('list');


addField.onclick = function () {
  if (inputText.value != 0) {
    listItem = createNewElement(inputText.value);
    list.appendChild(listItem);
    linkEvents(listItem);
    inputText.value = "";
    input.value = "";

  };
};

function createNewElement(text) {
  let listItem = document.createElement('li');
  let label = document.createElement('label');
  label.innerHTML = text;
  listItem.appendChild(label);

  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'delete';
  deleteButton.classList.add('delete');
  listItem.appendChild(deleteButton);


  let editButton = document.createElement('button');
  editButton.innerHTML = 'edit';
  editButton.classList.add('edit');
  listItem.appendChild(editButton);

  let input = document.createElement('input');
  input.type = "text";
  listItem.appendChild(input);


  return listItem;

}

function linkEvents() {
  deleteButton = listItem.querySelector('button.delete');
  deleteButton.onclick = function () {
    listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
  }
  editButton = listItem.querySelector('button.edit');
  editButton.onclick = function () {
    editButton = this;
    listItem = this.parentNode;
    label = listItem.querySelector('label');
    input = listItem.querySelector('input');
    input.value = label.innerHTML;
    input.addEventListener('change', updateValue);
    function updateValue(input) {
      label.textContent = this.value;
    }
  }
}
