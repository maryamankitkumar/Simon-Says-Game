let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector("h3");

let btns = ["pink", "blue", "red", "green"];


let started = false;

let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function (){
    btn.classList.remove("gameFlash");     
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
    btn.classList.remove("userFlash");     
    }, 250);
}



function levelUp(){
level++;
h3.innerText = `Curr level : ${level}`;

//random color should be picked 
let ranIdx = Math.floor(Math.random() * 4);
let ranColor = btns[ranIdx];
let randBtn = document.querySelector(`.${ranColor}`);
gameSeq.push(ranColor);
console.log(gameSeq);
gameFlash(randBtn);
}

function checkAns(){
console.log("current level :", level);

let idx = level-1;
if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
        levelUp();
    }
    console.log("same value");
}else{
    h2.innerText = `Game Over! Press any key to play again : ${level}`;
}
}


function btnPress(){
    let btn = this;
    console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}



