let text = document.querySelector(".list__list-text");
let input = document.querySelector(".list__input-text");
let button = document.querySelector(".list__input-go");
let buttonChange = document.querySelector(".list__input-name");
let counter = 0;
button.onclick = function () {
    counter++;  
    text = document.createElement("p");
    text.innerHTML +=  counter +  ". " + input.value ;
    document.getElementById("list").reset();
    document.getElementsByTagName("div")[0].appendChild(text); 

    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Delete";
    document.getElementsByTagName("div")[0].appendChild(btn);

};
buttonChange.onclick = function () {
    BUTTON = document.querySelector("span");
    BUTTON.remove();
  
};


