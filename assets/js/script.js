"use strict"

// let addBtn = document.querySelector("button");
// let inputText = document.querySelector("input");
// let ul = document.querySelector("ul");
// let span = document.querySelector(".text .error-message");

// addBtn.addEventListener("click", function () {
//     if (inputText.value.trim() == "") {
//         span.classList.remove("d-none")
//         return;
//     }
//    span.classList.add("d-none")

//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     li.innerText = inputText.value;
//     ul.append(li);
//     let i = document.createElement("i")
//     i.className = "fa-solid fa-circle-xmark"
//     li.append(i);
//     inputText.value = "";

//     i.onclick = function () {
//         li.remove();
//     }
// })

// console.log(document.querySelector("h1"));
// console.log(document.querySelector("h1").parentNode);
// console.log(document.querySelector("h1").parentNode.parentNode.parentNode);
// console.log(document.querySelector("h1").nextElementSibling);
// console.log(document.querySelector("h1").nextElementSibling.nextElementSibling);
// console.log(document.querySelector("h1").parentNode.previousElementSibling);
// console.log(
//   document.querySelector("h1").parentNode.previousElementSibling.children
// );

// console.log(
//   document.querySelector("h1").parentNode.previousElementSibling.children[0]
//     .innerText
// );

// console.log(
//   document.querySelector("h1").parentNode.previousElementSibling
//     .firstElementChild.innerText
// );

// console.log(document.querySelector("h1").closest(".container"));

let sidebar=document.querySelector(".sidebar");

let openIcon=document.querySelector(".sidebar .open-icon");

let closeIcon=document.querySelector(".sidebar .close-icon");


openIcon.addEventListener("click", function(){
    sidebar.classList.remove("move-sidebar")
    this.previousElementSibling.classList.remove("d-none")
    this.classList.add("d-none")
})

closeIcon.addEventListener("click", function(){
    sidebar.classList.add("move-sidebar")
    this.nextElementSibling.classList.remove("d-none")
    this.classList.add("d-none")

})