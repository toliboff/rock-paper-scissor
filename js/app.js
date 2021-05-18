const images=['rock', 'paper', 'scissor'];

const tools=document.getElementById('tools');
let usersChoice = document.getElementById('user-choice');
let computerChoice = document.getElementById('computer-choice');
let userPoint = document.getElementById('user-point');
let computerPoint = document.getElementById('computer-point');

tools.querySelectorAll('img').forEach(elem=>elem.onclick=(evt)=>{
    const userSelection=evt.target.dataset.id;
    
    playRound(userSelection, computerSelection());
});


function computerSelection(){
    const  rndNumber=Math.floor(Math.random()*3)+1;
    return images[rndNumber-1];
}

function playRound(userSelection, computerSelection){
    usersChoice.src=`./img/${userSelection}.jpg`;
    computerChoice.src=`./img/${computerSelection}.jpg`;
    console.log('user: ', userSelection);
    console.log('computer: ', computerSelection);

    if (userSelection==computerSelection){
        console.log('No one wins!');
    } else if (userSelection=='rock'){
            computerSelection=='scissor' ? userPoint.textContent=Number(userPoint.textContent)+1 : computerPoint.textContent=Number(userPoint.textContent)+1;
    }
    else if (userSelection=='paper'){
        computerSelection=='rock' ? userPoint.textContent=Number(userPoint.textContent)+1 : computerPoint.textContent=Number(userPoint.textContent)+1;
    }
    else if (userSelection=='scissor'){
        computerSelection=='paper' ? userPoint.textContent=Number(userPoint.textContent)+1 : computerPoint.textContent=Number(userPoint.textContent)+1;
    }
}