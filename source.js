let cont = document.getElementById("firstContainer");

cont.style.display = "none";

let box = document.getElementById("userInput");
let addy = document.getElementById("addButton");

box.style.display = "none";
addy.style.display = "none";

function showMe(){
    if (cont.style.display === "none"){
        cont.style.display = "inline";
    } else {
        cont.style.display = "none";
    }
};

 let listy = document.getElementById("todoList");
 var inputbox = document.createElement("input");



function addTodo(){
    if (box.style.display === "none"){
        box.style.display = "inline";
    }
    if (addy.style.display === "none"){
        addy.style.display = "inline";
    }
    else {
        box.style.display = "none";
        addy.style.display = "none";
    }
};

function addTask(){
    var node = document.createElement("LI");
    var text = document.getElementById("userInput").value; 
    var textnode = document.createTextNode(text);
    node.classList.add("list-group-item");
    node.appendChild(textnode);
    listy.appendChild(node);
 
};
     
     


