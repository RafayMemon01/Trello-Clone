console.log("Hello World");
console.log(newElemtInput)
let fun = function fun(event) {
    console.log("funWorking")
    if (event.keyCode == 13) {
        console.log("enterpressed");
        let newElement = document.createElement("div")
        let newHeading = document.createElement("h1")
        let newInput   = document.createElement("input")
        newHeading.id += 'heading'
        newInput.className += 'newTiketButton';
        let newElemtInput = document.querySelector("#newElemtInput").value;
        newHeading.innerHTML = newElemtInput;
        newElement.className += 'subContent'
        newElement.setAttribute("draggable","true")
        newInput.setAttribute("placeholder","Create New Task")
        console.log(newElement)
        console.log(newHeading)
        let mainContent = document.querySelector(".mainContent");
        mainContent.appendChild(newElement);
        newElement.appendChild(newHeading);
        newElement.appendChild(newInput)
    }
}
let fun2 = function fun2(event) {
    console.log("fun2Working")
    console.log("Cicked On ADD");
        let newElement = document.createElement("div")
        let newHeading = document.createElement("h1")
        let newInput   = document.createElement("input")
        newHeading.id += 'heading'
        newInput.className += 'newTiketButton';
        let newElemtInput = document.querySelector("#newElemtInput").value;
        newHeading.innerHTML = newElemtInput;
        newElement.className += 'subContent'
        newElement.setAttribute("draggable","true")
        newInput.setAttribute("placeholder","Create New Task")
        console.log(newElement)
        console.log(newHeading)
        let mainContent = document.querySelector(".mainContent");
        mainContent.appendChild(newElement);
        newElement.appendChild(newHeading);
        newElement.appendChild(newInput)

}

let fun3 = function fun3(event) {
    console.log("fun3 Working")
    if (event.keyCode == 13){
        console.log("enterpressed");
        let tiketsDiv = document.querySelector(".tikets");
        let userValue = document.querySelector(".newTiketButton").value;
        // let userValue2 = document.querySelector(".newTiketButton")
        let newTiket =  document.createElement('div')
        let tiketSpan = document.createElement('span')
        let iconI     = document.createElement('i')
        newTiket.className += 'tiket';
        newTiket.setAttribute("draggable","true")
        iconI.className += 'bi'
        iconI.className += ' bi-trash3-fill'
        tiketSpan.innerHTML = userValue
        newTiket.appendChild(tiketSpan)
        newTiket.appendChild(iconI)
        tiketsDiv.appendChild(newTiket)
        console.log(newTiket)

    }
}
