//File system module
const fs = require('fs');
const readline = require('readline');

async function getCalories() {

    const lineReader = readline.createInterface({
        input: fs.createReadStream('../../input/2022/day01.txt'),
        //Sets each line in text as a newline
        crlfDelay: Infinity,
    });

    let elfCalories = [];
    let currentCalories = 0;

    for await (const line of lineReader) {
        if (line.length === 0) {
            elfCalories.push(currentCalories);
            currentCalories = 0;
        }
        else {
            currentCalories += Number(line);
        }
        console.log(line);
    }

    elfCalories.sort((a, b) => {
        return a - b;
    })

    return elfCalories;
}

function part1() {
    getCalories().then(arr => {
        console.log(arr[arr.length - 1]);
    })
}

function part2() {
    getCalories().then(arr => {
        console.log(arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]);
    })
}

/*
part1();
part2();
*/
