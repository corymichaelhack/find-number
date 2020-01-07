let randomNumber;
let shapeNum;
let shapesArray = [ 'square', 'triangle'];
let numberContainer = document.querySelector('#number-container');
let digit = 0;

function setRandomNumber(){
    randomNumber = Math.floor(Math.random() * 10) + 1;
}

function setRandomShape(){
     shapeNum = Math.floor(Math.random() * 2);
     console.log(shapeNum);
}

function createShapes(){
    for (let i = 0; i < randomNumber; i++){
        let shape = document.createElement('div');
        numberContainer.appendChild(shape);
        shape.setAttribute('class', `shape ${shapesArray[shapeNum]} ${shapesArray[shapeNum]}-big`);
    }
    collectShapes();
}

function collectShapes(){
    shapes = document.querySelectorAll(`.${shapesArray[shapeNum]}-big`);
}

function addClickHandlerToShape(){
    for (let i = 0; i < shapes.length; i++){
        shapes[i].addEventListener('click', isClicked)
    }
}

function getNextNumber(){
    digit = digit + 1;
    return digit
}

function isClicked(){
    
    if (!this.classList.contains('number')){
        this.classList.add('number')
        this.innerText = getNextNumber();
        allShapesClicked();
    } else {
        console.log('already clicked')
    }
}

function allShapesClicked(){
    if ( digit === randomNumber){
        setTimeout(()=> {
            alert(`You counted all ${randomNumber} shapes`)
        }, 500)
    }    
}

setRandomNumber();
setRandomShape();
createShapes();
// collectShapes();
addClickHandlerToShape();

