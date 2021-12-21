var addButton = document.getElementById("adicionar");
var input = document.getElementById("nova-tarefa");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");


function inputLength(){
     return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 

   

}

addButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(){
    if(inputLength() > 0 && event.which ===13){
        createListElement();
    }
}  