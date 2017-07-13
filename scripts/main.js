/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let convertedHand = []

  // Assign numerical values to each card except Aces
  // Put those numerical values to an array
  // If card is an Ace, just put 'A' in the array
  for (var i = 0; i < hand.length; i++) {
    let cardValue = 0
    if (hand[i] > 1 && hand[i] <= 10) {
      cardValue = parseInt(hand[i])
    } else if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      cardValue = 10
    } else {
      cardValue = "A"
    }
    convertedHand.push(cardValue)
  }

  // Decide what value 'A' should be according to summing all values except A

  // First sum all values except A
  // Then check handValue before adding any As
  let handValue = 0
  // let arrayOfAIndices = []

  for (var i = 0; i < convertedHand.length; i++) {
    if (convertedHand[i] != "A") {
      handValue += convertedHand[i]
    }
  }

  for (var j = 0; j < convertedHand.length; j++) {
    let cardValue = 0
    if (convertedHand[j] === "A") {
      if (21 - handValue > 10) {
        cardValue = 11
        handValue += cardValue
      } else {
        cardValue = 1
        handValue += cardValue
      }
    }
  }

  // console.log(handValue)

  return handValue
}
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
