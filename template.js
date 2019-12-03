
import fs from 'fs';
import { printResults } from '../utils/utils'

function first(input) {
  
}

function second(input) {

}

const input = fs.readFileSync('input.txt')
  .toString();

printResults(first(input), second(input));
