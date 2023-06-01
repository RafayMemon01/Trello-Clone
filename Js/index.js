console.log("Hello World");
console.log(newElemtInput);

// 
// rem.addEventListener("click", function(event) {
// event.target.parentElement.remove()
// })
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
        newInput.setAttribute("onKeydown","fun3(event)")
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

// const rem = document.querySelector(".bi-trash3-fill")
// rem.addEventListener("click", function(event) {
// event.target.parentElement.parentElement.remove()
// })
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
        let abc = event.target.previousElementSibling
        iconI.className += 'bi'
        iconI.className += ' bi-trash3-fill'
        iconI.setAttribute("onClick","newfun()")
        tiketSpan.setAttribute("contentEditable","true")
        tiketSpan.innerHTML = userValue
        newTiket.appendChild(tiketSpan)
        newTiket.appendChild(iconI)
        abc.appendChild(newTiket)
        console.log(newTiket)

    }
}
function newfun(event) {
    let rem1 = document.querySelector(".bi-trash3-fill");
    rem1.addEventListener("mousedown", function(event) {
        event.target.parentNode.remove();
        console.log("New Fun Working")
    });
}
document.addEventListener('click', function(e){
    console.log(e.target.className)
})