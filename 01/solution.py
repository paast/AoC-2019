
import math

def fuel_equation(mass):
  amount = math.floor(mass / 3) - 2
  return (amount if (amount > 0) else 0)

def first(input):
  return sum([fuel_equation(n) for n in input])

def second(input):
  def add_fuel(fuel):
    amount = fuel_equation(fuel)
    return (amount + add_fuel(amount) if amount > 0 else 0)

  return sum([add_fuel(n) for n in input])

def main():

  with open('input.txt') as file:
    input = [int(n) for n in file.read().split('\n') if (n)]

  firstSolution = first(input)
  secondSolution = second(input)
  outMsg = f"Solutions:\nPart 1: {firstSolution}\nPart 2: {secondSolution}"

  print(outMsg)


################################

if (__name__ == "__main__"): main() 
