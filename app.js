/*let userScore = 0
let computerScore = 0 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scisors_div = document.getElementById("s"); 

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper"; 
    else return "Scisors";
}

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

console.log(getComputerChoice())

function win(userChoice, computerChoice){
    userScore ++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Beats " + convertToWord(computerChoice) + "! You Win!"
}

function lose(userChoice, computerChoice){
    computerScore ++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Loses To " + convertToWord(computerChoice) + "! You Lose!"
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " And " + convertToWord(computerChoice) + "! It's A Draw!"
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case"rs":
        case"pr":
        case"sp":
            win(userChoice, computerChoice);
            break;
        case"rp":
        case"ps":
        case"sr":
            lose(userChoice, computerChoice);
            break;
        case"rr":
        case"pp":
        case"ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scisors_div.addEventListener('click', function(){
        game("s");
    })
}

main();*/

function duplicateEncode(word){ 
   
    let wordArray = word.split('')
    
    for(i = 0; i <= wordArray.length; i++)
        for(j = i + 1; j <= wordArray.length ; j++)
     if(i==1) {
        console.log('(')
    } else {
        console.log(')')
    }
        
}

duplicateEncode('sadasdasdasdasd');









