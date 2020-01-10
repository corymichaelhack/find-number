let randomNumber;
let shapeNum;
let shapesArray = [ 'square', 'triangle', 'circle'];
let numberContainer = document.querySelector('#number-container');
let digit = 0;



function setRandomNumber(){
    randomNumber = Math.floor(Math.random() * 10) + 1;
}

function setRandomShape(){
     shapeNum = Math.floor(Math.random() * 3);
     console.log(shapeNum);
}

function setQuestion(){
    let questionTitle = document.querySelector('#question-title');
    let question = document.createTextNode(`How many ${shapesArray[shapeNum]}s can you count?`);
    questionTitle.appendChild(question);
}

function setQuestionShape(){
    let showShape = document.querySelector('#show-shape');
    let shape = document.createElement('div');
    shape.setAttribute('class', ` shape ${shapesArray[shapeNum]} ${shapesArray[shapeNum]}-small`)
    showShape.appendChild(shape);
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
            clearGame();
            resetGame();
        }, 500);
        
    }   
     
}

function clearGame(){
    //clear shape
    document.body.querySelectorAll('.shape').forEach(n => n.remove());
    
    //clear question title
    let questionTitle = document.querySelector('#question-title').childNodes[0];
    questionTitle.remove();
}

function resetGame(){
    digit = 0;
    setRandomNumber();
    setRandomShape();
    setQuestion();
    setQuestionShape();
    createShapes();
    addClickHandlerToShape();
}




setRandomNumber();
setRandomShape();
setQuestion();
setQuestionShape();
createShapes();
addClickHandlerToShape();


