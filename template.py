
def first(input):
  return

def second(input):
  return

def main():

  with open('input.txt') as file:
    input = file.read()

  firstSolution = first(input)
  secondSolution = second(input)
  outMsg = f"Solutions:\nPart 1: {firstSolution}\nPart 2: {secondSolution}"
  
  print(outMsg)


################################

if (__name__ == "__main__"): main() 
