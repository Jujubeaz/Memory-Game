var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.")
}