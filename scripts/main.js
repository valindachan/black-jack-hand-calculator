/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let handValue = 0

  for (var i = 0; i < hand.length; i++) {
    let cardValue = 0
    if (hand[i] >= 1 && hand[i] <= 10) {
      cardValue = parseInt(hand[i])
    } else if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
      cardValue = 10
    } else {
      if (21 - handValue < 10) {
        cardValue = 11
      } else {
        cardValue = 1
      }
    }
    handValue += cardValue
  }

  console.log(handValue)

  return handValue
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
