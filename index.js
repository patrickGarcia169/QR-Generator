
// Container Variable
let main = document.getElementById("main");

// Creation Function
function makeElement(element, idName, text){
    let obj = document.createElement(element);
    if(idName != ""){
        obj.setAttribute("id", idName);
    }
    if(text != ""){
        let txtNode = document.createTextNode(text);
        obj.appendChild(txtNode);
    }

    return obj;
}

// Start Screen
function displayStart(){

    // Clean Slate
    main.innerHTML = "";
    
    // Element Creation
    let h1 = makeElement("h1", "start-header", "Do you want to make a free QR code?");
    let button = makeElement("button", "start-button", "Yes");
    let div = makeElement("div", "start-screen", "");

    // Element Attributes
    button.setAttribute("onClick", "displayGenerator()");

    // Appending
    div.appendChild(h1);
    div.appendChild(button);
    main.appendChild(div);
}

// Generator Screen
function displayGenerator(){

    // Clean Slate
    main.innerHTML = "";

    // Element Creation
    let label = makeElement("label", "", "URL: ");    
    let input = makeElement("input", "url-input", "");    
    let button = makeElement("button", "qr-submit", "Submit");    
    let form = makeElement("form", "input-form", "");    
    let h1 = makeElement("h1", "qr-header", "This is the QR Generator");    
    let h2 = makeElement("h2", "", "Enter a URL to get a free QR code");    
    let button2 = makeElement("button", "qr-return", "Go Back");    
    let div = makeElement("div", "qr-screen", "");

    // Element Attributes
    form.setAttribute("onSubmit", "createQR(); return false;") // Delete for any text
    label.setAttribute("for", "url-input")
    input.setAttribute("type", "url");
    input.setAttribute("placeholder", "Enter URL");
    input.setAttribute("required", "");
    button.setAttribute("type", "submit");
    button2.setAttribute("type", "button");
    button2.setAttribute("onClick", "displayStart()");

    // Appending
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(form);
    div.appendChild(button2);
    main.appendChild(div);
};

// URL Sumbission
function createQR(){

    // Remove Submit Button
    let button = document.getElementById("qr-submit");
    button.remove();

    // Variables
    let web = document.getElementById("url-input").value;

    // Element Creation
    let div = makeElement("div", "qr-div", "");
    let txt = makeElement("h2", "qr-txt", "Website: " + web);
    let image = makeElement("p", "qr-img", "");

    // Appending
    div.appendChild(txt);
    div.appendChild(image);
    main.appendChild(div);

    let qrcode = new QRCode("qr-img", web);
    
}

// Main
displayStart();