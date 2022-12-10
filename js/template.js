const {readFileSync} = require('node:fs');

const lines = readFileSync("../../input/2022/day01.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map(Number); //Parse each line into a number

function part1() {
  
}

function part2() {

}