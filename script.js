function findMax() {
    const numbersInput = document.getElementById("numbers");
    const result = document.getElementById("result");
  
    const numbers = numbersInput.value.split(",").map(num => parseInt(num.trim(), 10));
  
    if (numbers.some(isNaN)) {
      result.textContent = "Invalid input! Please enter numbers separated by commas.";
      return;
    }
  
    const max = highClimbingAlgorithm(numbers);
    result.textContent = `The maximum value is: ${max}`;
  }
  
  function highClimbingAlgorithm(arr) {
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
  