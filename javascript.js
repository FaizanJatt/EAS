const button = document.getElementById('clearButton');
const container = document.querySelector('.container');
const random = document.getElementById('randomizer');
let color = 'black';

function addDiv(numberOfDivs){
    for (let i = 0; i < (numberOfDivs * numberOfDivs); i++){
        const box = document.createElement("div");
        box.className = 'item';
        box.style.flexBasis = `${((1 / numberOfDivs) * 100)}%`;
        container.appendChild(box);
    }
    let gridCells = document.querySelectorAll('.item');
    gridCells.forEach(cell => cell.addEventListener('pointerenter', changeColor));
}

function changeC(){
    let blue = Math.floor(Math.random() * 255)
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    color = `rgb(${red}, ${blue}, ${green})`
}
  

function changeColor(){
    this.style.backgroundColor = color;
}

function clear(){
    const reqSize = prompt("how many squares per side?");
    if (reqSize >= 1 && reqSize <= 100){
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
        addDiv(reqSize);
    } else{
        alert('Choose a number between 1-100');
        clear();
    }
}

random.addEventListener("click", changeC);
button.addEventListener('click', clear); 
window.onload = addDiv(16); 