let randomNumber = 3;
let shapes;
let numberContainer = document.querySelector('#number-container');
let digit = 0;

function createShapes(){
    for (let i = 0; i < randomNumber; i++){
        let shape = document.createElement('div');
        numberContainer.appendChild(shape);
        shape.setAttribute('class', 'square square-big');
    }
    collectShapes();
}

function collectShapes(){
    shapes = document.querySelectorAll('.square-big');
}

function addClickHandlerToShape(){
    for (let i = 0; i < shapes.length; i++){
        shapes[i].addEventListener('click', isClicked)
    }
}

function getNextNumber(){
    digit = digit + 1;
    console.log("inside", digit)
    return digit
}
console.log('outside', digit)




function isClicked(){
    
    if (!this.classList.contains('number')){
        this.classList.add('number')
        this.innerText = getNextNumber(); 
    } else {asdf
        console.log('already clicked')
    }
}

createShapes();
// collectShapes();
addClickHandlerToShape();

