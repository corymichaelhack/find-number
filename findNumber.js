let randomNumber = 3;
let shapes;
let numberContainer = document.querySelector('#number-container');

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

function isClicked(){
    console.log('hello')
}

createShapes();
// collectShapes();
addClickHandlerToShape();

