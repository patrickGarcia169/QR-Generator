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