
const sum = (nums) => {
  return nums.reduce((sum, n) => sum += n);
}

const printResults = (firstSolution, secondSolution) => {
  const output = (
    `Solutions:\nPart 1: ${firstSolution}\nPart 2: ${secondSolution}`
  );
  console.log(output);
}

module.exports = {
  sum,
  printResults
}