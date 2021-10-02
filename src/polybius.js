// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusArray = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"]
  ]


  function polybius(input, encode = true) {
    // your solution code here
    
    let answer = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let inputLower = input[i].toLowerCase ();
        if (input[i] === " ") {
          answer = answer + input[i];
        }
        else if (inputLower === "j" || inputLower === "i") {
          answer = answer + "42";
        }
        else {
        for (let j = 0; j < polybiusArray.length; j++) {
          let found = polybiusArray[j].find((letter) => letter === inputLower);
          if (found) {
            let firstNum = (polybiusArray[j].indexOf(found) + 1);
            let secondNum = (j + 1)
            if (secondNum === 2 && firstNum > 4) {
              firstNum = firstNum - 1;
            }
            answer = answer + firstNum.toString() + secondNum.toString()
          }
        }
      }
      }
      return answer;
    } 
    
    else {
      let length = input.length;
      if (input.includes (" ")) {
        length--;
      }
      if (length % 2 !== 0) {
        return false;
      }
      for (let i = 0; i < input.length; i = i + 2) {
        
        if (input[i] === " ") {
          answer = answer + " ";
          i--;
        }
        else {
        answer = answer + (polybiusArray [input[i + 1] - 1][input[i] - 1])
        }
      }
    }
    return answer;
  }

  return {
    polybius,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius
};