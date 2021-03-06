function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1, 6);

const dice = {
  // value: getRandomIntInclusive(1, 6);
  roll: function() {
    this.value = getRandomIntInclusive(1, 6);
    return this.value;
  }
}
//Crate the dice
const diceTwo = {
  value: 1,
  roll: function() {
    this.value = getRandomIntInclusive(1, 6);
    return this.value;
  }
}

const rollAndPrint = event => {
  if (event) {
    event.preventDefault();
  }

  let diceOneNumber = dice.roll();
  // let containerOne = document.querySelector(".dice-01");


  let newClass = "img-0" + diceOneNumber;
  let elm = document.getElementById("dice-01");

  if (elm.className !== newClass) {
    elm.className = newClass;
  }


  let diceTwoNumber = dice.roll();
  // let containerTwo = document.querySelector(".dice-02");


  let newClassTwo = "img-0" + diceTwoNumber;
  let elmTwo = document.getElementById("dice-02");

  if (elmTwo.className !== newClassTwo) {
    elmTwo.className = newClassTwo;
  }
}

document.querySelector('button').addEventListener('click', rollAndPrint);
rollAndPrint();
