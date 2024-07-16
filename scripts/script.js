console.log('my script is linked')
//cache at least one element using selectElementById
const taskList = document.getElementById('tasks');
console.log(taskList);

// Iterate over a collection of elements to accomplish some task.
//      the easiest sets of elements to iterate over in a meaningful way are
//      <li> or <a> in a nav
// I am going to decide to use a list so I'll add a list to my index.html
//      and becuase i need a FileList, i can get another requirement met 
// I will need form validation 
// a user inputting a new task would be a form

//Purpose: This line of code sets up an event listener for the DOMContentLoaded event.
//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
//document.addEventListener: This method attaches an event listener to the document object.
//DOMContentLoaded": This specifies the event type to listen for.
//function () { ... }: This is the callback function that runs when the event is triggered. The code inside this function will execute once the DOM is fully loaded.
//In simpler words, this event listener setup is telling the browser, "when the DOM is ready,run this function"
document.addEventListener("DOMContentLoaded", function () {
   
    // --------Requirement: Cache at least one element using getElementById (5%)---------
    
    //document.getElementById is a method that finds an HTML element by its ID.
    //How It Works: It searches the HTML document for the element with the specified ID and returns that element so you can use it in your script.

    
   //Purpose: Finds the element with the ID "main-title" and stores it in the variable mainTitle.
   //Why: So you can easily change or use this element later in the code.
    const mainTitle = document.getElementById("main-title");
    
    //Purpose: Finds the element with the ID "item-list" and stores it in the variable itemList.
    //Why: So you can add or remove items from this list.
    const itemList = document.getElementById("item-list");
    
    //Purpose: Finds the element with the ID "add-item-button" and stores it in the variable addItemButton.
    //Why: So you can make something happen when this button is clicked.
    const addItemButton = document.getElementById("add-item-button");
    
    //Purpose: Finds the element with the ID "example-form" and stores it in the variable exampleForm.
    //Why: So you can handle form submissions.
    const exampleForm = document.getElementById("example-form");
    
    //Purpose: Finds the element with the ID "name-field" and stores it in the variable nameField.
    //Why: So you can get or set the value of this input field.
    const nameField = document.getElementById("name-field");
    
    //Purpose: Finds the element with the ID "output" and stores it in the variable output.
    //Why: So you can display results or messages in this area.
    const output = document.getElementById("output");

    // --------Requirement: Cache at least one element using querySelector (5%)-----------
    
    //Purpose: This method finds the first element that matches a given CSS selector.
    //How it Works: It searches the HTML document for the element that fits the criteria you specify.
    //In simpler terms, its saying "Find the element with the ID description and store it in the variable description so we can use it later."
    const description = document.querySelector("#description");


    //The eventlistener waits for the button to be clicked.
    //When the button is clicked, it runs the function inside the curly braces { ... }.
    addItemButton.addEventListener("click", function () {
            // --------Requirement: Create at least one element using createElement (5%)-------
        //Purpose: This line creates a new list item element (<li>).
        //What It Does: document.createElement("li") makes a new <li> element and stores it in the variable newItem.
        const newItem = document.createElement("li");
        //Purpose: Adds a CSS class named item to the new list item
        //What It Does: This line ensures that the new list item has the same styling as other items in the list.
        newItem.classList.add("item");
         // --------Requirement: Modify the HTML or text content of at least one element in response to user interaction (10%)--------
        //Purpose: Sets the text inside the new list item.
        //What It Does: This line gives the new list item a name, like "Item 1", "Item 2", etc., based on how many items are already in the list.
        newItem.textContent = `Item ${itemList.children.length + 1}`;
         // --------Requirement: Use appendChild to add new elements to the DOM (5%)---------
        //Purpose: Adds the new list item to the existing list.
        //What It Does: This line inserts the new <li> element into the <ul> element with the ID itemList.
         itemList.appendChild(newItem);
    });

    // Requirement: Iterate over a collection of elements to accomplish some task (10%)
    document.querySelectorAll(".item").forEach(function (item) {
        item.addEventListener("click", function () {
            alert(`You clicked on ${item.textContent}`);
        });
    });

    // -----Requirement: Include at least one form and/or input with DOM event-based validation (5%)--------
   
    exampleForm.addEventListener("submit", function (event) {
        //event.preventDefault(); stops the form from submitting the usual way.
        event.preventDefault();
        // ----------Requirement: Include at least one form and/or input with HTML attribute validation (5%)-----------
        if (nameField.value === "") {
            //This means the user must enter something in the text box before they can submit the form.
            alert("Input field is required!");
        } else {
             // ---------Requirement: Modify the HTML or text content of at least one element in response to user interaction (10%)-----------
            output.textContent = `You entered: ${nameField.value}`;
             // ---------Requirement: Modify the style of an element in response to user interaction using the style property (5%)-----------
            output.style.color = "green";
            nameField.value = "";
        }
    });

    // ---------Requirement: Modify at least one attribute of an element in response to user interaction (3%)-------
    //setAttribute: This is a method that sets a new value for an attribute on an HTML element.
    //What It Does: It modifies the description element so that when you hover over it, a tooltip with the text "This is a description" will appear.
    description.setAttribute("title", "This is a description");

    // -------------Requirement: Register at least two different event listeners and create the associated event handler functions (10%)--------
    // ----------Requirement: Modify the style of an element in response to user interaction using the style property (5%)-------
    //Purpose: This line changes the text color of the mainTitle element to blue.
//What It Does: It modifies the style of the mainTitle element in response to the mouseover event.
    mainTitle.addEventListener("mouseover", function () {
        mainTitle.style.color = "blue";
    });
//Purpose: This line adds another event listener to the mainTitle element.
//
    mainTitle.addEventListener("mouseout", function () {
        //Purpose: This line changes the text color of the mainTitle element back to black.
//What It Does: It modifies the style of the mainTitle element in response to the mouseout event.
        mainTitle.style.color = "black";
    });
});