function solveHighClimbing() {
  const numbersInput = document.getElementById("numbers");
  const bestSolutionElement = document.getElementById("bestSolution");
  const neighborsElement = document.getElementById("neighbors");

  const numbers = numbersInput.value.split(",").map(val => parseInt(val.trim(), 10));

  if (numbers.some(isNaN)) {
    bestSolutionElement.textContent = "Invalid input! Please enter numeric values separated by commas.";
    neighborsElement.textContent = "";
    return;
  }

  const { bestSolution, neighbors } = solveHighClimbingAlgorithm(numbers);
  bestSolutionElement.textContent = "The best solution is: " + bestSolution;
  neighborsElement.textContent = generateNeighborText(neighbors);
}

function generateNeighborText(neighbors) {
  const neighborText = neighbors.map(neighbor => `${neighbor.solution}(${neighbor.neighbors.join(", ")})`);
  return "Neighbors: " + neighborText.join(", ");
}

function solveHighClimbingAlgorithm(numbers) {
  let bestSolution = numbers[0]; // Set the initial solution as the first number in the array
  let bestScore = calculateScore(bestSolution, numbers);
  let neighbors = [];

  for (let i = 1; i < numbers.length; i++) {
    const currentSolution = numbers[i];
    const currentScore = calculateScore(currentSolution, numbers);

    if (currentScore >= bestScore) {
      if (currentScore > bestScore || currentSolution < bestSolution) {
        bestSolution = currentSolution;
        bestScore = currentScore;
        neighbors = []; // Reset neighbors when finding a better solution
      }
      neighbors.push({ solution: currentSolution, neighbors: findNeighbors(currentSolution, numbers) });
    }
  }

  return { bestSolution, neighbors };
}

function findNeighbors(solution, numbers) {
  const neighbors = [];
  const currentIndex = numbers.indexOf(solution);
  if (currentIndex > 0) {
    neighbors.push(numbers[currentIndex - 1]);
  }
  if (currentIndex < numbers.length - 1) {
    neighbors.push(numbers[currentIndex + 1]);
  }
  return neighbors;
}

// Rest of the code remains the same...


function calculateScore(solution, numbers) {
  const currentIndex = numbers.indexOf(solution);
  const leftNeighbor = currentIndex > 0 ? numbers[currentIndex - 1] : Infinity;
  const rightNeighbor = currentIndex < numbers.length - 1 ? numbers[currentIndex + 1] : Infinity;
  const currentNumber = numbers[currentIndex];

  const smallestNeighbor = Math.min(leftNeighbor, rightNeighbor);

  if (currentNumber < smallestNeighbor) {
    return 1; // Assign a higher score if the current number is the smallest among its neighbors
  } else {
    return 0; // Assign a lower score if the current number is not the smallest among its neighbors
  }
}

function findNeighbors(solution, numbers) {
  const currentIndex = numbers.indexOf(solution);
  const leftNeighbor = currentIndex > 0 ? numbers[currentIndex - 1] : null;
  const rightNeighbor = currentIndex < numbers.length - 1 ? numbers[currentIndex + 1] : null;

  const neighbors = [];

  if (leftNeighbor !== null) {
    neighbors.push(leftNeighbor);
  }
  if (rightNeighbor !== null) {
    neighbors.push(rightNeighbor);
  }

  return neighbors;
}
