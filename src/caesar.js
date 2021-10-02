// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function caesar(input, shift, encode = true) {
    // your solution code here\
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    } else {
      let encoded = "";
      if (!encode) {
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            encoded = encoded + " ";
          } else if (input[i] === ".") {
            encoded = encoded + ".";
          } else {
            let found = (alphabet.indexOf(input[i].toLowerCase()) - shift)
            if (found > alphabet.length - 1) {
              found = found - alphabet.length;
            } else if (found < 0) {
              found = alphabet.length + found;
            }
            encoded = encoded + alphabet[found]
          }
      }
      } else {
        for (let i = 0; i < input.length; i++) {
          if (!(alphabet.includes (input[i].toLowerCase()))) {
            encoded = encoded + input[i];
          } else if (input[i] === ".") {
            encoded = encoded + ".";
          } else {
            let found = (alphabet.indexOf(input[i].toLowerCase()) + shift)
            if (found > alphabet.length - 1) {
              found = found - alphabet.length;
            } else if (found < 0) {
              found = alphabet.length + found;
            }
            encoded = encoded + alphabet[found]
          }
        }
      }
      return encoded;
    }
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar
};