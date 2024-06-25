// Container Variable
let main = document.getElementById("main");

// Start Screen HTML
let startScreen = 
'<div id="start-screen">\
    <h1 id="start-header">Do you want to make a free QR code?</h1>\
    <button type="button" id="start-button" onClick="displayGenerator()">Yes</button>\
</div>';

// DEBUG
let header = document.getElementById("start-header");
console.log(header + ": Function 1 Element");

// Display Start Screen
function displayStart(){
    main.innerHTML = startScreen;
}
displayStart();

// QR Generator Screen
let generatorScreen = 
'<div id="qr-screen">\
    <h1 id="qr-header">This is the QR Generator</h1>\
    <h2 id="qr-header">Enter a URL to get a free QR code</h2>\
    <form id="input-form">\
        <label for="url-input">URL:  </label>\
        <input type="url" id="url-input" placeholder="Enter URL" required></input>\
        <br>\
        <button type="submit" id="qr-submit">Submit</button>\
    </form>\
    <button type="button" id="qr-return" onClick="displayStart()">Go Back</button>\
</div>';

// Display QR Generator Screen
function displayGenerator(){
    main.innerHTML = generatorScreen;
}

/********************************************** */

window.addEventListener("DOMContentLoaded", function() {

    // Variables
    let codeForm = document.getElementById("input-form");

    // DEBUG
    let button = document.getElementById("qr-submit");
    console.log(button + ": Function 2 Element");

    button.addEventListener("click", (e) => {
        e.preventDefault();
    })
}, false)

/*POSSIBLE ISSUE: the elements called in by the functions aren't considered rendered in DOM
which means the JS loads before it can even though it is on the screen. 
document.addEventListener("DOMContentLoaded", (e) => {}) does not help or work. Because I made
the DOM reliant on the calling of JS functions, the JS is called then the DOM is rendered 
causing the issue. It works with the button clicking, but not with the other elements*/ 

/*POSSIBLE SOLUTION: the only element in this JS code that is tangible is "main" because
body is written into the HTML file. Both function elements are like ghosts: they have an
appearance but are not tangible. I need to find a way to make the function elements tangible*/