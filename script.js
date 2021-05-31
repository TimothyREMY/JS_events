// First functionality

let clickerFooter = document.getElementsByTagName("footer");

let clickCounter = 0

function clickFooter(){
  clickCounter = clickCounter + 1
  console.log(`click number : ${clickCounter}`);
};

console.log(clickerFooter);

clickerFooter[0].addEventListener("click", clickFooter);
//############################################################

//############################################################
// Second functionality

let hiddenHeader = document.getElementById("navbarHeader");
let burgerMenu = document.getElementsByClassName("navbar-toggler");

console.log(burgerMenu);

function clickBurger(){
hiddenHeader.classList.toggle("collapse");
};

burgerMenu[0].addEventListener("click", clickBurger);
//############################################################

//############################################################
// Third functionality

let cardList = document.getElementsByClassName("card");
let firstCard = cardList[0];
let firstEditButton = firstCard.getElementsByClassName("btn-outline-secondary");
let textFirstCard = firstCard.getElementsByTagName("p")

console.log(textFirstCard);

function clickFirstEditButton(){
  textFirstCard[0].style.color="red" ;
}

firstEditButton[0].addEventListener("click", clickFirstEditButton);
//############################################################

//############################################################
// Fourth functionality

let secondCard = cardList[1];
let secondEditButton = secondCard.getElementsByClassName("btn-outline-secondary");
let textSecondCard = secondCard.getElementsByTagName("p")

console.log(textSecondCard);

function clickSecondEditButton(){
  if(textSecondCard[0].style.color==="green"){
    textSecondCard[0].style.color="black" ;
  } else {
    textSecondCard[0].style.color="green" ;
  }
}

secondEditButton[0].addEventListener("click", clickSecondEditButton);
//############################################################

//############################################################
// Fifth functionality

let bootstrapLink = document.getElementsByTagName("link");
let allPage = document.getElementsByTagName("html");
let header = document.getElementsByTagName("header");

console.log(bootstrapLink)

function doubledClickBootstrap(){
  bootstrapLink[0].toggleAttribute('disabled');
  
}
header[0].addEventListener("dblclick", doubledClickBootstrap);
//############################################################

//############################################################
// Sixth functionality

let viewBtns = document.querySelectorAll(".btn-success");
for (let i = 0; i < viewBtns.length; i++) {
  viewBtns[i].addEventListener("mouseenter", function () {
    let cardImage = document.querySelectorAll(".card-img-top")[i];
    let cardText = document.querySelectorAll(".card-text")[i];

    cardText.toggleAttribute('hidden');
    if(cardImage.style.width==='20%'){
      cardImage.style.width='100%';
    } else{
      cardImage.style.width='20%';
    }
    
    
  });
}
//############################################################

//############################################################
// Seventh functionality

let rightArrow = document.querySelector(".btn-secondary.my-2");

rightArrow.addEventListener("click", function () {
  let allCards = document.querySelectorAll(".col-md-4");
  let lastCard = document.querySelectorAll(".col-md-4")[5];
  let parent = lastCard.parentElement;
  parent.insertBefore(allCards[5], allCards[0]);
});

//############################################################

//############################################################
// Eighth functionality

let leftArrow = document.querySelector(".btn-primary");

leftArrow.addEventListener("click", function () {
  let allCards = document.querySelectorAll(".col-md-4");
  let firstCard = document.querySelectorAll(".col-md-4")[0];
  let parent = firstCard.parentElement;
  parent.insertBefore(allCards[0], allCards[5]);
});