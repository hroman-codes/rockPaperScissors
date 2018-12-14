// test the connection of your js
// console.log('hello')

// cache the DOM aka storing for future use
// any variable with an underscore _ is refrencing an HTML element
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const scoreBoard_div = document.querySelector('.scoreBord');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// add event listeners
// log out the clicks to the console
// call game inside each event listener it will throw an error;
// wrap all event listeners in a main function
// call the main funciton
function main(){
  rock_div.addEventListener('click', function(){
    // console.log('Hey you clicked the rock');
    game('rock');
  })

  paper_div.addEventListener('click', function(){
    // console.log('You clicked the paper');
    game('paper');
  })

  scissors_div.addEventListener('click', function(){
    // console.log('You clicked the Scissor');
    game('scissors');
  })
}
main();

// we need a computer choice that is random
  // create the choices rock paper scissors
  // get random element from the choices array
  // first test out the Math.random() by console.logging notice what it does
  // now round it down to a whole number & store in variable
function  getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = Math.floor(Math.random() * 3);
  // console.log('1️⃣', Math.floor(Math.random() * 3));

  return choices[randomNumber];
}
// console.log(getComputerChoice()) // this will get you to print out random choices

// create a function defenition called game that will
  // take in a user input Rock Paper or Scissor
  // log out the user input
  // compare againts the computer choice
  // get the result back
  // compare computer and user results
function game(userChoice){
  const computerChoice = getComputerChoice();
  // console.log('User Choice 💁' + ' ' + userChoice)
  // console.log('Computer Choice 🗿' + ' ' + computerChoice)
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      console.log('User Wins');
      win(userChoice, computerChoice)
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      console.log('User loses');
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      console.log('Tie!');
      tie(userChoice, computerChoice);
      break;
  }
}

// create functions to spit out information to the user on win loose || tie
function win(userChoice, computerChoice){
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. You win 🔥`;
  userChoice_div.classList.add('greenGlow');
  setTimeout(function(){
    userChoice_div.classList.remove('greenGlow')
  }, 300);
}

function lose(userChoice, computerChoice){
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  computerScore++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord}. You lost 😞 💩`;
  userChoice_div.classList.add('redGlow');
  setTimeout(function(){
    userChoice_div.classList.remove('redGlow')
  }, 300);
}

function tie(userChoice, computerChoice){
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallCompWord = 'comp'.fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  result_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. Its a tie 😖 👔`;
  userChoice_div.classList.add('grayGlow');
  setTimeout(function(){
    userChoice_div.classList.remove('grayGlow')
  }, 300);
}
