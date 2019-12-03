
import fs from 'fs';
import { sum, printResults } from '../utils/utils'

function fuelEquation(mass) {
  const fuel = Math.floor(mass / 3) - 2;
  return (fuel > 0) ? fuel : 0;
}

function first(input) {
  return sum(input.map((n) => fuelEquation(n)));
}

function second(input) {
  const addFuel = (mass) => {
    const fuel = fuelEquation(mass);
    return (fuel > 0) ? fuel + addFuel(fuel) : 0;
  };

  return sum(input.map((n) => addFuel(n)));
}

const input = fs.readFileSync('input.txt')
  .toString()
  .split('\n')
  .map((n) => n ? parseInt(n) : null);

printResults(first(input), second(input));
