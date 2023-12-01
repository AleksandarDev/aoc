import { readFileSync } from 'node:fs';

const input = readFileSync('./1_1/input_final.txt', 'utf8');

function isDigit(char) {
    return typeof char === 'string' && char.length === 1 && char >= '0' && char <= '9';
}

let sum = 0;
input.split('\n').forEach((line) => {
    const cal = line.split('').filter(isDigit);
    if(!cal.length) return;
    sum += cal.length === 1 ? Number(cal.at(0) + cal.at(0)) : Number(cal.at(0) + cal.at(-1));
});

console.log(sum);