console.log("Hello World");

// first input function when user press enter 
let fun = function (event) {
    console.log("funWorking");
    if (event.keyCode == 13) {
        console.log("enterpressed");
        let newElement = document.createElement("div");
        let newHeading = document.createElement("h1");
        let newInput = document.createElement("input");
        newHeading.id = 'heading';
        newInput.className = 'newTiketButton';
        newInput.setAttribute("name", "tiketText")
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
let fun2 = function (event) {
    console.log("fun2Working");
    console.log("Clicked On ADD");
    let newElement = document.createElement("div");
    let newHeading = document.createElement("h1");
    let newInput = document.createElement("input");
    newHeading.id = 'heading';
    newInput.className = 'newTiketButton';
    newInput.setAttribute("name", "tiketText")
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

let fun3 = function (event) {
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
        // newTiket.setAttribute("ondragstart","drag(event)")
        // newTiket.setAttribute("id","drag1")
        newTiket.setAttribute("draggable", "true");
        let abc = event.target.previousElementSibling;
        iconI.className = 'bi bi-trash3-fill';
        iconI.addEventListener("click", function (event) {
            event.target.parentNode.remove();
            console.log("New Fun Working");
        });
        tiketSpan.setAttribute("contentEditable", "true");
        tiketSpan.innerHTML = userValue;
        newTiket.appendChild(tiketSpan);
        newTiket.appendChild(iconI);
        abc.appendChild(newTiket);
        console.log(newTiket);

        let tiket = newTiket;
        // newTiket.addEventListener("")
        tiket.addEventListener('dragstart', dragStart); // Add dragstart event listener to the tiket
        tiket.addEventListener('dragover', dragOver); // Add dragover event listener to the tiket
        tiket.addEventListener('dragleave', dragLeave); // Add dragleave event listener to the tiket
        tiket.addEventListener('drop', drop); // Add drop event listener to the tiket
        tiket.addEventListener('touchstart', touchStart); // Add touchstart event listener to the tiket
        tiket.addEventListener('touchmove', touchMove); // Add touchmove event listener to the tiket
        tiket.addEventListener('touchend', touchEnd); // Add touchend event listener to the tiket
    }

    let dragtiket = null; // Variable to store the dragged tiket element
    let targetList = null; // Variable to store the target list for the tiket drop

    function dragStart(event) {
        const tiket = event.target; // Get the dragged tiket
        dragtiket = tiket; // Store the dragged tiket in the dragtiket variable
        tiket.style.opacity = '0.8'; // Reduce opacity of the dragged tiket
        // tiket.style.transform = 'rotate(3deg)'; // Add a slight rotation effect
        tiket.style.cursor = 'grabbing';
        event.dataTransfer.effectAllowed = 'move'; // Set the drag effect to move
        event.dataTransfer.setData('text/html', tiket.innerHTML); // Set the data to be transferred during drag
    }

    function dragOver(event) {
        event.preventDefault(); // Prevent default behavior during dragover
        const tiket = event.target; // Get the current tiket element
        tiket.style.opacity = '0.8'; // Reduce opacity of the current tiket

    }



    function dragLeave(event) {
        const tiket = event.target; // Get the current tiket element
        tiket.style.border = 'none'; // Remove border when dragging leaves the tiket
    }

    function drop(event) {
        event.preventDefault();
        const tiket = event.target;
        tiket.style.border = 'none';
        tiket.style.opacity = '1';
        tiket.style.background = '#ffffff';
        const sourceList = dragtiket.parentNode;
        const targetList = tiket.parentNode;
    
        if (sourceList && targetList && sourceList !== targetList) {
            sourceList.style.height = `${sourceList.offsetHeight - dragtiket.offsetHeight}px`;
            targetList.insertBefore(dragtiket, tiket);
            targetList.style.height = `${targetList.offsetHeight + dragtiket.offsetHeight}px`;
        }
    
        dragtiket = null;
    }


};