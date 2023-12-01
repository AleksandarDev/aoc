import { readFileSync } from 'node:fs';

const input = readFileSync('./1_2/input_final.txt', 'utf8');

function isDigit(char) {
    return typeof char === 'string' && char.length === 1 && char >= '0' && char <= '9';
}

const numberWords = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

let sum = 0;
input.split('\n').forEach((line) => {
    let first = null;
    for(let i = 0; i < line.length; i++) {
        if (first) break;
        if (isDigit(line.charAt(i))) {
            first = line.charAt(i);
            
        }

        // Check if the current word is a number word
        for(let j = 0; j < numberWords.length; j++) {
            const numberWord = numberWords[j];
            if (line.substring(i).startsWith(numberWord)) {
                first = (j + 1).toString();
                break;
            }
        }
    }
    
    let last = null;
    for(let i = line.length - 1; i >= 0; i--) {
        if (last) break;
        if (isDigit(line.charAt(i))) {
            last = line.charAt(i);
            break;
        }

        // Check if the current word is a number word
        for(let j = 0; j < numberWords.length; j++) {
            const numberWord = numberWords[j];
            if (line.substring(0, i + 1).endsWith(numberWord)) {
                last = (j + 1).toString();
                break;
            }
        }
    }
    
    sum += Number(first + last);
});

console.log(sum);