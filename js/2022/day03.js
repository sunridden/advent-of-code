const {readFileSync} = require('node:fs');

const lines = readFileSync("../../input/2022/day03.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .split("\n") // Split on newline

function part1() {

  let priority = 0;

  for (let line of lines) {
    let firstHalf = line.slice(0, (line.length / 2));
    let secondHalf = line.slice((line.length / 2));
    for (let i = 0; i < firstHalf.length; i++) {
      if (secondHalf.includes(firstHalf[i])) {
        priority += assignRank(firstHalf[i]);
        break;
      }
    }
  }
  console.log(priority);
}

function part2() {
  let priority = 0;
  let counter = 0;
  let elfRucksacks = [];

  for (let line of lines) {
    if (counter >= 3) {
      priority += findIdenticalLetter(elfRucksacks);
      elfRucksacks = [];
      counter = 0;
    }
    elfRucksacks.push(line);
    counter++;
  }

  priority += findIdenticalLetter(elfRucksacks);

  console.log(priority);
}

function assignRank(letter) {
  const priority = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if (priority.includes(letter)) {
    return (priority.indexOf(letter) + 1);
  } else {
    return (priority.indexOf(letter.toLowerCase()) + 27);
  }
}

//Function for part2 finds the same 'item' between the three elf rucksacks
function findIdenticalLetter(elfRucksacks) {
  let largest = elfRucksacks.reduce(function(longest, currentRucksack) {
    if (currentRucksack.length > longest.length) {
      return currentRucksack;
    } else {
      return longest;
    }
  })
  for (let i = 0; i < largest.length; i++) {
    if (elfRucksacks[0].includes(elfRucksacks[1][i]) && elfRucksacks[2].includes(elfRucksacks[1][i])) {
      return assignRank(elfRucksacks[1][i]);
    }
  }
}

/*
part1();
part2();
*/