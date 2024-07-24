let userScore = 0;
let compScore = 0;

// show msg display 

const msgDisplay  = document.getElementById('message')

// computer choice

const getCompChoice = () => {
  let option = ["rock", "paper", "scissors"];

  // let getRandom =option[Math.floor(Math.random()*option.length)]
  let getRandom = option[Math.floor(Math.random() * 3)];
  return getRandom;
};

//   getCompChoice();

// playgame

const drawGame = () => {
  console.log("Game Draw");
  msgDisplay.innerText = 'Game Draw'
  msgDisplay.style.backgroundColor = 'whitesmoke'
  msgDisplay.style.color =  'black'
};

const showWinner = (userWin)=>{
    if(userWin = true){
        console.log("You Won ")
        msgDisplay.innerText = "You Won"
        msgDisplay.style.backgroundColor = 'green'
        
    }
    else{
        console.log("You Lose")
        msgDisplay.innerText = "You Lose"
        msgDisplay.style.backgroundColor = 'red'
    }
}

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  //generate computer choice
  const compChoice = getCompChoice();

  console.log("comp choice =", compChoice);

  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      //paper , scissor
      userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice=== 'paper'){
        //rock ,scissor 
        userWin = compChoice === "scissors" ? false :true
    }
    else{
        // paper ,rock
        userWin = compChoice === "rock" ? false:true
    }
    showWinner(userWin)
  }
  
};

// user choice

const choices = document.querySelectorAll(".choice");

choices.forEach((select) => {
  //   console.log(select);

  select.addEventListener("click", () => {
    const userChoice = select.getAttribute("id");
    // console.log("choice is clicked", userChoice);
    playGame(userChoice);
  });
});
