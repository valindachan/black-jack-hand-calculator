function handValue(hand) {
  // Create array to hold numerical value of cards
  let convertedHand = []

  // Assign numerical values to each card except Aces
  // Put those numerical values to an array
  // If card is an Ace, just put 'A' in the array for now
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

  let handValue = 0

  // First sum up all values except A
  for (var i = 0; i < convertedHand.length; i++) {
    if (convertedHand[i] != "A") {
      handValue += convertedHand[i]
    }
  }

  // Before assigning numerical values to the As (if any)
  // Check the handValue so far
  for (var j = 0; j < convertedHand.length; j++) {
    let cardValue = 0

    if (convertedHand[j] === "A") {
      // If the difference between the handValue and 21 is greater than 10,
      // assign the ace to equal 11. If not, then assign the ace to equal 1
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
/* -----  Values ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
