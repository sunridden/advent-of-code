const {readFileSync} = require('node:fs');

const lines = readFileSync("../../input/2022/day02.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .split("\n") // Split on newline

function part1() {
  let totalScore = 0;

  for (line of lines) {
    let score = 0;
    let elfChoice = line[0];
    let playerChoice = line[2];

    switch(playerChoice) {
      case 'X':
        score += 1;
        break;
      case 'Y':
        score += 2;
        break;
      case 'Z':
        score += 3;
        break;
    }

    let winningPairs = [
      ['A', 'Y'],
      ['B', 'Z'],
      ['C', 'X']
    ];

    let losingPairs = [
      ['A', 'Z'],
      ['B', 'X'],
      ['C', 'Y']
    ];

    let winner = winningPairs.filter((arr) => {
      if ((arr.includes(elfChoice) && arr.includes(playerChoice))) {
        return true;
      }
      return false;
    })

    if (winner.length > 0) {
      score += 6;
    }

    let loser = losingPairs.filter((arr) => {
      if ((arr.includes(elfChoice) && arr.includes(playerChoice))) {
        return true;
      }
      return false;
    })

    if (loser.length === 0 && winner.length === 0) {
      score += 3;
    }
    totalScore += score;
  }
  console.log("Final score is " + totalScore);
}

function part2() {

  let totalScore = 0;

  for (line of lines) {
    let score = 0;
    let elfChoice = line[0];
    let playerChoice = line[2];

    let winningPairs = [
      ['A', 'Y'],
      ['B', 'Z'],
      ['C', 'X']
    ];

    let losingPairs = [
      ['A', 'Z'],
      ['B', 'X'],
      ['C', 'Y']
    ];

    let drawPairs = [
      ['A', 'X'],
      ['B', 'Y'],
      ['C', 'Z']
    ];

    switch(playerChoice) {
      case 'X':
        pairChoice = losingPairs.filter((arr) => {
          if (arr.includes(elfChoice)) {
            return true;
          }
          return false;
        })

        playerChoice = pairChoice[0][1];
        break;
      case 'Y':
        pairChoice = drawPairs.filter((arr) => {
          if (arr.includes(elfChoice)) {
            return true;
          }
          return false;
        })

        playerChoice = pairChoice[0][1];
        score += 3;
        break;
      case 'Z':
        pairChoice = winningPairs.filter((arr) => {
          if (arr.includes(elfChoice)) {
            return true;
          }
          return false;
        })

        playerChoice = pairChoice[0][1];
        score += 6;
        break;
    }

    switch(playerChoice) {
      case 'X':
        score += 1;
        break;
      case 'Y':
        score += 2;
        break;
      case 'Z':
        score += 3;
        break;
    }
    totalScore += score;
  }
  console.log("Final score is " + totalScore);
}

/*
part1();
part2();
*/