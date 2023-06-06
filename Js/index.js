console.log("Hello World");

// first input function when user press enter 
let fun = function(event) {
    console.log("funWorking");
    if (event.keyCode == 13) {
        console.log("enterpressed");
        let newElement = document.createElement("div");
        let newHeading = document.createElement("h1");
        let newInput = document.createElement("input");
        newHeading.id = 'heading';
        newInput.className = 'newTiketButton';
        newInput.setAttribute("name","tiketText")
        let newElemtInput = document.querySelector("#newElemtInput").value;
        newHeading.innerHTML = newElemtInput;
        newElement.className = 'subContent';
        newElement.setAttribute("draggable", "true");
        newInput.setAttribute("placeholder", "Create New Task");
        newInput.setAttribute("onkeydown", "fun3(event)");
        console.log(newElement);
        console.log(newHeading);
        let mainContent = document.querySelector(".mainContent");
        mainContent.appendChild(newElement);
        newElement.appendChild(newHeading);
        newElement.appendChild(newInput);
    }
};
// first input when user click on add 
let fun2 = function(event) {
    console.log("fun2Working");
    console.log("Clicked On ADD");
    let newElement = document.createElement("div");
        let newHeading = document.createElement("h1");
        let newInput = document.createElement("input");
        newHeading.id = 'heading';
        newInput.className = 'newTiketButton';
        newInput.setAttribute("name","tiketText")
        let newElemtInput = document.querySelector("#newElemtInput").value;
        newHeading.innerHTML = newElemtInput;
        newElement.className = 'subContent';
        newElement.setAttribute("draggable", "true");
        newInput.setAttribute("placeholder", "Create New Task");
        newInput.setAttribute("onkeydown", "fun3(event)");
        console.log(newElement);
        console.log(newHeading);
        let mainContent = document.querySelector(".mainContent");
        mainContent.appendChild(newElement);
        newElement.appendChild(newHeading);
        newElement.appendChild(newInput);
};

let fun3 = function(event) {
    console.log("fun3 Working");
    if (event.keyCode == 13) {
        console.log("enterpressed");
        let tiketsDiv = document.querySelector(".tikets");
        console.log(event)

        let userValue = event.target.value

        console.log(userValue);

        let newTiket = document.createElement('div');
        let tiketSpan = document.createElement('span');
        let iconI = document.createElement('i');
        newTiket.className = 'tiket';
        newTiket.setAttribute("draggable", "true");
        let abc = event.target.previousElementSibling;
        iconI.className = 'bi bi-trash3-fill';
        iconI.addEventListener("click", function(event) {
            event.target.parentNode.remove();
            console.log("New Fun Working");
        });
        tiketSpan.setAttribute("contentEditable", "true");
        tiketSpan.innerHTML = userValue;
        newTiket.appendChild(tiketSpan);
        newTiket.appendChild(iconI);
        abc.appendChild(newTiket);
        console.log(newTiket);
        
        newTiket.addEventListener("")
    
    }
};

// document.addEventListener('click', function(e) {
//     console.log(e.target.className);
// });


// let onTheMoveElm =  undefined;
// allTikets = document.querySelectorAll(".tiket");
// allTikets.array.forEach(tiketElm => {
//     tiketElm.addEventListener('mousedown',function (e){
//         console.log("e.path: ", e.target.className);
//         onTheMoveElm = e.target;
        
//     })
// });
// const subContent = document.querySelector('.subContent');
// new SimpleBar(subContent);
let open = function newblock(e){
    let block = document.querySelector(".gridBlock")
    if(block.style.display == "none"){
        block.style.display = "block";
        e.target.style.color = "red";
        }else{
            block.style.display = "none";
    }
}