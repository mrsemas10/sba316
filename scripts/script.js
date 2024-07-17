console.log('my script is linked')

document.addEventListener("DOMContentLoaded", function () {

    // const mainTitle = document.getElementById("main-title");
    const appName = document.getElementById("app-name");
    // const itemList = document.getElementById("item-list");
    const notesList = document.getElementById("notes-list");
    // const addItemButton = document.getElementById("add-item-button");
    const noteButton = document.getElementById("add-note-button");
    // const exampleForm = document.getElementById("example-form");
    const myForm = document.getElementById("form");
    // const nameField = document.getElementById("name-field");
    const yourName = document.getElementById("name");
    const yourEmail = document.getElementById("email");
    // const description = document.querySelector("#description");
    const directions = document.querySelector("directions");

    // addItemButton.addEventListener("click", function () {
    //     const newItem = document.createElement("li");
    //     newItem.classList.add("item");
    //     newItem.textContent = `Item ${itemList.children.length + 1}`;
    //     itemList.appendChild(newItem);
    // });
    noteButton.addEventListener("click", function () {
        const newNote = document.createElement("li");
        newNote.classList.add("notes");
        newNote.textContent = `notes ${notesList.children.length + 1}`;
        notesListList.appendChild(newNote);
    });

    
    // document.querySelectorAll(".item").forEach(function (item) {
    //     item.addEventListener("click", function () {
    //         alert(`You clicked on ${item.textContent}`);
    //     });
    // });

    // document.querySelectorAll(".notes").forEach(function (item) {
    //     item.addEventListener("click", function () {
    //         alert(`You clicked on ${item.textContent}`);
    //     });
    // });
    myForm.addEventListener("send", function (evt) {
        evt.preventDefault();
        if (yourName.value === "" || yourEmail === "") {
            alert("Input field is required!");
        } else {
            output.textContent = `You entered: ${nameField.value}`;
            output.style.color = "green";
            nameField.value = "";
        }
    });
    description.setAttribute("title", "This is a description");


    mainTitle.addEventListener("mouseover", function () {
        mainTitle.style.color = "blue";
    });

    mainTitle.addEventListener("mouseout", function () {

        mainTitle.style.color = "black";
    });
});