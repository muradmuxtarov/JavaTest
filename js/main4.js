// const addBtnElement = document.getElementById("addButton");
// const todoListElement = document.getElementById("todoList");
// const todoInputElement = document.getElementById("todoInput");
// const deleteAllBtnElement = document.getElementById ("deleteAllButton")


// addBtnElement.addEventListener("click", function () {
//     if (todoInputElement.value != "") {
//         todoListElement.innerHTML += "<li class='list-group-item'>" + todoInputElement.value + "</li>"
//             todoInputElement.value = "";
//     }
// })

// deleteAllBtnElement.addEventListener("click", function (){
//      todoListElement.innerHTML = "";
// } )


const widthInputElement = document.getElementById("widthInput");
const heightInputElement = document.getElementById("heightInput");
const textInputElement = document.getElementById("textInput");
const addButtonElement = document.getElementById("addButton");
const divElement = document.getElementById("containerr");
const box = document.querySelector('.box');
const colorElement = document.getElementById("color");

addButtonElement.addEventListener("click", function () {
    if (heightInput.value != "") {
        if (!isNaN(heightInput.value) && !isNaN(widthInputElement.value)) {
            // divElement.innerHTML += "<div class = 'box' style='width:" + widthInputElement.value + "px;height:" + heightInputElement.value + "px; background-color:" + colorElement.value + "'>" + textInputElement.value + "</div>";
            const newBox = document.createElement("div");
            newBox.classList.add("box");
            newBox.style.width = widthInputElement.value + "px";
            newBox.style.height = heightInputElement.value + "px";
            newBox.style.backgroundColor = colorElement.value;
            newBox.innerText = textInputElement.value;
            newBox.addEventListener("click", function (){
                newBox.remove();
            });
            divElement.appendChild(newBox);
        }
    }
});