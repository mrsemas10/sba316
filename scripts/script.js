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
    const noteInput = document.getElementById("note-input");
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
    noteButton.addEventListener("click", addNote);
        function addNote() {
        
        const newNote = noteInput.value;
        const newLi = document.createElement("li");
        // newNote.classList.add("notes-list");
        newLi.textContent = newNote;
        notesList.appendChild(newLi);
    };

    
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
    myForm.addEventListener("send", hitSend);
    function hitSend(evt) {
        evt.preventDefault();
        alert('An email has been sent.');
    }   
    //     if (yourName.value === "" || yourEmail === "") {
    //         alert("Input field is required!");
    //     } else {
    //         alert('An email has been sent.');
    //     }
    // });

    // directions.setAttribute("title", "follow these directions");

    appName.addEventListener("mouseover", function () {
        appName.style.color = "red";
    });

    appName.addEventListener("mouseout", function () {

        appName.style.color = "blue";
    });
});