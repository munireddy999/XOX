let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newButton = document.querySelector("#new");
let winnertxt = document.querySelector(".winner-container");
let message = document.querySelector("#message");


let count = 0;
let turn0 = true;

const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turn0 = true;
    enableButton();
    winnertxt.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "X";
            turn0 = false;          
        }
        else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();

        });
});

const disableButton = () =>{
    for( let box of boxes){
        box.disabled = true;
    }
}

const enableButton = () =>{
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    message.innerText = `congrulations , winner is ${winner}`;
    winnertxt.classList.remove("hide");
    disableButton();
}


const checkWinner = () => {
    for ( let pattern of WinPatterns){
        let positionValue1 = boxes[pattern[0]].innerText;
        let positionValue2 = boxes[pattern[1]].innerText;
        let positionValue3 = boxes[pattern[2]].innerText;

        if(positionValue1 !="" , positionValue2 != "" , positionValue3 != ""){
            if(positionValue1 === positionValue2 && positionValue2 === positionValue3){
                showWinner(positionValue1);
            }
        }
    }
}

resetButton.addEventListener("click",resetGame);
newButton.addEventListener("click",resetGame);
