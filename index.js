//player object details
let player = {
  name: "Darren",
  chips: 145,
};

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let cards = [];
let sum = 0;

//use this boolean variable to keep track of the state to see if player has blackjack
let hasBlackJack = false;

//use this boolean variable to keep track of the state to see if player has busted of they have 22 or more
let isAlive = false;

//set message variable to empty string
let message = "";

//get element id in variable
let messageEL = document.getElementById("message-el");
//let cardValues = document.getElementById("cards");
let cardValues = document.querySelector("#cards");
let cardSum = document.getElementById("sum");

//get player-el id from html
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

//get random card function
function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
} //end of getRandomCard function

///startGame()
function startGame() {
  isAlive = true;
  // Generate two random numbes
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
} //end of startGame function

// 2. Create a renderGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function renderGame() {
  cardValues.textContent = "Cards: ";

  //use a for loop that renders all the cards
  for (let i = 0; i < cards.length; i++) {
    cardValues.textContent += cards[i] + ", ";
  }

  //render the sum and display it
  cardSum.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do yu want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true; //this changes the state to true
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEL.textContent = message;
  //   cardSum.textContent = "Sum: " + sum;
} //end of renderGame function

//new card function
function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();

    //add the newCard to the sum variable
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
  }

  //call again the renderGame() function
  renderGame();
} //end of newCard function
