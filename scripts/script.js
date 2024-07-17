console.log('my script is linked')

document.addEventListener("DOMContentLoaded", function () {

    const appName = document.getElementById("app-name");
    const notesList = document.getElementById("notes-list");
    const noteButton = document.getElementById("add-note-button");
    const myForm = document.getElementById("form");
    const myNotes = document.getElementById("my-notes");
    const noteInput = document.getElementById("note-input");
    const yourName = document.getElementById("name");
    const yourEmail = document.getElementById("email");

    const directions = document.querySelector("directions");
   

    noteButton.addEventListener("click", addNote);
    function addNote() {

        const newNote = noteInput.value;
        const newLi = document.createElement("li");
        // newNote.classList.add("notes-list");
        newLi.textContent = newNote;
        notesList.appendChild(newLi);
    };


    document.querySelectorAll("submit").forEach(function (button) {
        button.addEventListener("click", function () {
            alert('An email has been sent.');
        });
    });

    myForm.addEventListener("submit", validate);

    function validate(evt) {
        const enterName = validateName();
        if (enterName === false || enterEmail === false) {
            evt.returnValue = false;
            return false;
        }
    }

    function validateName() {
        let enterName = yourName.value;
        if (enterName.length < 2) {
            alert("Your name must be a least 2 characters");
            return false;
        }

        return enterName;
    }


    myForm.addEventListener("submit", hitSend);
    function hitSend(evt) {
        evt.preventDefault();
        alert(`An email was sent to: ${myForm.querySelector("#email").value}`);
    }
    
    // directions.setAttribute("title", "follow these directions");

    appName.addEventListener("mouseover", function () {
        appName.style.color = "red";
    });

    myNotes.addEventListener("mouseout", function () {
        myNotes.style.color = "blue";
    });
});