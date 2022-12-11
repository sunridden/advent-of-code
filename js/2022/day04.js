const {readFileSync} = require('node:fs');

const lines = readFileSync("../../input/2022/day04.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline

function part1() {
  let duplicatePairs = 0;
  for (let line of lines) {
    let divide = line.split(',');

    let firstHalf = divide[0].split('-');
    let secondHalf = divide[1].split('-');
  
    //tests if a range of numbers is contained within the other pair
    if (Number(firstHalf[0]) <= Number(secondHalf[0]) && Number(firstHalf[1]) >= Number(secondHalf[1])) {
      duplicatePairs++;
    } else if (Number(firstHalf[0]) >= Number(secondHalf[0]) && Number(firstHalf[1]) <= Number(secondHalf[1])) {
      duplicatePairs++;
    }
  }
  console.log(duplicatePairs);
}

function part2() {

  let overlappingPairs = 0;

  for (let line of lines) {
    let divide = line.split(',');
    let found = false;

    let firstHalf = divide[0].split('-');
    let secondHalf = divide[1].split('-');
  
    let firstRange = [];
    let secondRange = [];

    for (let i = Number(firstHalf[0]); i <= Number(firstHalf[1]); i++) {
      firstRange.push(i);
    }
    for (let j = Number(secondHalf[0]); j <= Number(secondHalf[1]); j++) {
      secondRange.push(j);
    }

    if (firstRange.length > secondRange.length) {
      for (let i = 0; i < secondRange.length; i++) {
        if (firstRange.includes(secondRange[i])) {
          found = true;
          break;
        }
      }
    } else {
      for (let j = 0; j < firstRange.length; j++) {
        if (secondRange.includes(firstRange[j])) {
          found = true;
          break;
        }
      }
    }
    
    if (found === true) {
      overlappingPairs++;
    }
  }
  console.log(overlappingPairs);
}

/*
part1();
part2();
*/