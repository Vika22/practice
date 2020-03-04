let text = document.querySelector(".list__list-text");
let input = document.querySelector(".list__input-text");
let button = document.querySelector(".list__input-go");
let buttonChange = document.querySelector(".list__input-name");
let counter = 0;
button.onclick = function () {
    counter++;  
    text = document.createElement("span");
    text.innerHTML +=  counter +  ". " + input.value +  "<br/>";
    document.getElementById("list").reset();
    document.getElementsByTagName("div")[0].appendChild(text); 
};

buttonChange.onclick = function () {
    let elem = document.querySelector("span");
    elem.remove();
  
};


