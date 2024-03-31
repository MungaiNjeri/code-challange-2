function swapCase(str) {
    return str.split('').map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }).join('');
  }
  
  // Example usage
  console.log(swapCase('The Quick Brown Fox')); // Output: tHE qUICK bROWN fOX