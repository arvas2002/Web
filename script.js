let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreboard_div=document.querySelector(".score");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r")
const paper_div=document.getElementById("p")
const scissors_div=document.getElementById("s")

function getComputerChoice(){
    const choices= ['ir','ip','is'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "ir") return "Rock";
    if(letter === "ip") return "Paper";
    return "Scissors";
}

function win(user, comp){
    const userChoice_div=document.getElementById(user)
    const compChoice_div=document.getElementById(comp)
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;

    result_p.innerHTML= `${convertToWord(user)} beats ${convertToWord(comp)} . You win`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500)
    compChoice_div.classList.add('red-glow');
    setTimeout(() => compChoice_div.classList.remove('red-glow'), 500)

}


function lose(user, comp){
    const userChoice_div=document.getElementById(user)
    const compChoice_div=document.getElementById(comp)
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML= `${convertToWord(comp)} beats ${convertToWord(user)} . You lose`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500)
    compChoice_div.classList.add('green-glow');
    setTimeout(() => compChoice_div.classList.remove('green-glow'), 500)

}
function draw(user, comp){
    const userChoice_div=document.getElementById(user)
    const compChoice_div=document.getElementById(comp)

    result_p.innerHTML= `${convertToWord(user)} equals ${convertToWord(comp)} . It's a draw`;

    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500)
    compChoice_div.classList.add('grey-glow');
    setTimeout(() => compChoice_div.classList.remove('grey-glow'), 500)

}


function game(userChoice){
    const computerChoice=getComputerChoice();
    
    switch (userChoice + computerChoice){
        case "ris":
        case "pir":
        case "sip":
            win(userChoice,computerChoice);
            break;
       case "rip":        
       case "pis":    
       case "sir":
            lose(userChoice, computerChoice);
            break;
       case "pip":
       case "sis":
       case "rir":
            draw(userChoice, computerChoice);
            break;          
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', ()=> game("p"));
    scissors_div.addEventListener('click', ()=> game("s"));
}
main();