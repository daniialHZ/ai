function mixArrays() {
    var array1 = document.getElementById('array1').value;
    var array2 = document.getElementById('array2').value;
    var sliceIndex = parseInt(document.getElementById('sliceIndex').value);
  
    // Convert the input arrays to actual arrays
    array1 = array1.split(',').map(Number);
    array2 = array2.split(',').map(Number);
  
    // Perform genetic algorithm array mixing
    var mixedArray1 = geneticArrayMixing(array1, array2, sliceIndex);
    var mixedArray2 = geneticArrayMixing(array2, array1, sliceIndex);
  
    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <p>First Result Array: ${mixedArray1.join(', ')}</p>
      <p>Second Result Array: ${mixedArray2.join(', ')}</p>
    `;
  }
  
  // Genetic algorithm array mixing function
  function geneticArrayMixing(array1, array2, sliceIndex) {
    var slice1 = array1.slice(0, sliceIndex);
    var slice2 = array2.slice(sliceIndex);
    return slice1.concat(slice2);
  }
  