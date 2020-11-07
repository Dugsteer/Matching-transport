// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const orange = document.getElementById("orange");
const blue = window.matchMedia("(max-width: 800px)");

//Change Intropic
function returnBalloon(){
  balloon.classList.remove('fly');
}

function liftMe() {
  balloon.classList.add("fly");
  setTimeout(returnBalloon, 4000);
  balloonRise();
}



//Make sound of balloon

function balloonRise() {
  const balloonSound = new Audio("sounds/rise.mp3");
  balloonSound.play();
}



// Show and hide about info
function show() {
  info.classList.toggle("xxc");
}
function unshow() {
  info.classList.remove("xxc");
}

//Center the loader wherever the page is
function checkForTop() {
  loader.style.top = window.pageYOffset + "px";
}
checkForTop();

//Manage the loader
function stopLoader() {
  loader.classList.add("stop");
}
function startLoader() {
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}
function toggler() {
  sidey.classList.toggle("block");
}
myFunction(blue);

//GAME FUNCTIONALITY
// There are three different sets of words/images used in the game
const firstSet = document.getElementById("set1");
const secondSet = document.getElementById("set2");
const thirdSet = document.getElementById("set3");

// These are the other DOM elements
const instructions = document.getElementById("instructions");
const gameContainer = document.getElementById("game-tiles");
const sideBar = document.getElementById("sidebar");

// Each image and word in a set array has the same data-framework number, in order to check for pairs.
// The data-name is a string, which can be used in the second case as innerHTML.
const set1 = [
  { number: "1", name: "airplane" },
  {
    number: "1",
    name: "<img src = 'img/airplane.jpg' alt='airplane' class='image'>",
  },
  { number: "2", name: "ambulance" },
  {
    number: "2",
    name: "<img src = 'img/ambulance.jpg' alt='ambulance' class='image'>",
  },
  { number: "3", name: "balloon" },
  {
    number: "3",
    name: "<img src = 'img/balloon.jpg' alt='balloon' class='image'>",
  },
  { number: "4", name: "bike" },
  {
    number: "4",
    name: "<img src = 'img/bike.jpg' alt='bike' class='image'>",
  },
  { number: "5", name: "bus" },
  {
    number: "5",
    name: "<img src = 'img/bus.jpg' alt='bus' class='image'>",
  },
  { number: "6", name: "digger" },
  {
    number: "6",
    name: "<img src = 'img/digger.jpg' alt='digger' class='image'>",
  },
  { number: "7", name: "e-car" },
  {
    number: "7",
    name: "<img src = 'img/e-car.jpg' alt='e-car' class='image'>",
  },
  { number: "8", name: "firetruck" },
  {
    number: "8",
    name: "<img src = 'img/firetruck.jpg' alt='firetruck' class='image'>",
  },
];
const set2 = [
  { number: "9", name: "helicopter" },
  {
    number: "9",
    name: "<img src = 'img/helicopter.jpg' alt='helicopter' class='image'>",
  },
  { number: "10", name: "limousine" },
  {
    number: "10",
    name: "<img src = 'img/limousine.jpg' alt='limousine' class='image'>",
  },
  { number: "11", name: "motorbike" },
  {
    number: "11",
    name: "<img src = 'img/motorbike.jpg' alt='motorbike' class='image'>",
  },
  { number: "12", name: "police-car" },
  {
    number: "12",
    name: "<img src = 'img/police-car.jpg' alt='police-car' class='image'>",
  },
  { number: "13", name: "sailboat" },
  {
    number: "13",
    name: "<img src = 'img/sailboat.jpg' alt='sailboat' class='image'>",
  },
  { number: "14", name: "school-bus" },
  {
    number: "14",
    name: "<img src = 'img/school-bus.jpg' alt='school-bus' class='image'>",
  },
  { number: "15", name: "ship" },
  {
    number: "15",
    name: "<img src = 'img/ship.jpg' alt='ship' class='image'>",
  },
  { number: "16", name: "speedboat" },
  {
    number: "16",
    name: "<img src = 'img/speedboat.jpg' alt='speedboat' class='image'>",
  },
];
const set3 = [
  { number: "17", name: "submarine" },
  {
    number: "17",
    name: "<img src = 'img/submarine.jpg' alt='submarine' class='image'>",
  },
  { number: "18", name: "taxi" },
  {
    number: "18",
    name: "<img src = 'img/taxi.jpg' alt='taxi' class='image'>",
  },
  { number: "19", name: "train" },
  {
    number: "19",
    name: "<img src = 'img/train.jpg' alt='train' class='image'>",
  },
  { number: "20", name: "truck" },
  {
    number: "20",
    name: "<img src = 'img/truck.jpg' alt='truck' class='image'>",
  },
  { number: "21", name: "airplane" },
  {
    number: "21",
    name: "<img src = 'img/airplane.jpg' alt='airplane' class='image'>",
  },
  { number: "22", name: "bike" },
  {
    number: "22",
    name: "<img src = 'img/bike.jpg' alt='bike' class='image'>",
  },
  { number: "23", name: "firetruck" },
  {
    number: "23",
    name: "<img src = 'img/firetruck.jpg' alt='firetruck' class='image'>",
  },
  { number: "24", name: "motorbike" },
  {
    number: "24",
    name: "<img src = 'img/motorbike.jpg' alt='motorbike' class='image'>",
  },
];

// By Default the game plays set1
playGame(set1);

// In the sidebar, different sets can be chosen by clicking
firstSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "FOOD MATCH: SET 1";
  playGame(set1);
});

secondSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "FOOD MATCH: SET 2";
  playGame(set2);
});

thirdSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "FOOD MATCH: SET 3";

  playGame(set3);
});

// PLAY THE GAME
// SHUFFLE THE GAME ARRAY for the chosen SET 1, 2 or 3.
function playGame(array) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // call the shuffle function & assign the array to "contents"
  shuffle(array);
  let contents = array;

  // Create 16 Playing cards by using forEach on the array contents.
  contents.forEach((data, index) => createCard(data, index));

  // Call the createCard function turn the cards into DIV elements.
  function createCard(data, index) {
    let card = document.createElement("div");
    // Add a classname so the cards can be styled with CSS
    card.classList.add("card");
    //  Include the data-famework (data.number) of the cards so they can be checked plus the necessary HTML.

    card.innerHTML = `<div class="memory-card" tabindex=0 data-framework="${data.number}"><div class="front-face">${data.name}</div><div class="back-face"><img src = "img/car_bg.png" alt="picture of a car" class="imgBg smaller" id="imgBg"></div></div>`;

    // Append the card divs to the game container so they appear on the page.
    gameContainer.appendChild(card);
  }

  // Select all instances of the class 'memory-card' and assign it to a constant
  const cards = document.querySelectorAll(".memory-card");

  // Set the initial boolean conditions to make the game work
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  // Prevent card flipping, add the 'flip' CSS class to flip the card if it's alright to do so.
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    // Allowing two cards to be flipped and calling the check function
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    checkForMatch();
  }

  // The check function
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }

    unflipCards();
  }

  // Make pairs vanish by killing their innerHTML
  function disableCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      resetBoard();
    }, 1000);
  }

  // Unflip cards if they don't match by removing the flip class.
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

  // Set the board to continue the game, setting the constants to their original state
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  // Event listener added to the cards
  cards.forEach((card) => card.addEventListener("click", flipCard));
}
