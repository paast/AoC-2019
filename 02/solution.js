
import fs from 'fs';
import { printResults } from '../utils/utils'

function first(input, noun, verb) {
  input[1] = noun;
  input[2] = verb;

  for (let i = 0; i < input.length; i += 4) {
    const op = input[i];
    const x = input[input[i + 1]];
    const y = input[input[i + 2]];
    const z = input[i + 3];

    if (op === 1) {
      input[z] = x + y;
    } else if (op === 2) {
      input[z] = x * y;
    } else {
      break
    }
  }
  
  return input[0];
}

function second(input, goal) {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const val = first(input.slice(), noun, verb);
      if (val === goal) { return (100 * noun) + verb }
    }
  }
}

const input = fs.readFileSync('input.txt')
  .toString()
  .split(',')
  .map(n => parseInt(n));

printResults(first(input.slice(), 12, 1), second(input.slice(), 19690720));
