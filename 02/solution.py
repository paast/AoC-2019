
def first(input, noun, verb):
  input[1] = noun
  input[2] = verb
  for i in range(0, len(input) - 1, 4):
    op = input[i]
    x = input[input[i + 1]]
    y = input[input[i + 2]]
    z = input[i + 3]
    
    if (op == 1):
      input[z] = x + y
    elif (op == 2):
      input[z] = x * y
    else:
      break

  return input[0]

def second(input, goal):
  for noun in range (100):
    for verb in range(100):
      val = first(input.copy(), noun, verb)
      if (val == goal):
        return (100 * noun) + verb
  return None

def main():

  with open('input.txt') as file:
    input = [int(n) for n in file.read().split(',')]

  firstSolution = first(input.copy(), 12, 2)
  secondSolution = second(input.copy(), 19690720)
  outMsg = f"Solutions:\nPart 1: {firstSolution}\nPart 2: {secondSolution}"
  
  print(outMsg)


################################

if (__name__ == "__main__"): main() 
