// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const actualAlpha = "abcdefghijklmnopqrstuvwxyz";

  function duplicatesExist(alphabet) {
    let alphArray = Array.from(alphabet);
    let duplicateAlph = [];
    for (let i = 0; i < alphArray.length; i++) {
      if ((duplicateAlph.includes(alphArray[i]))) {
        return false;
      } else {
        duplicateAlph.push(alphArray[i])
      }
    }
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (encode) {
      if (!alphabet || alphabet.length < 26) {
        return false;
      } else if (duplicatesExist(alphabet) === false) {
        return false;
      } else {
        let answer = "";
        for (let i = 0; i < input.length; i++) {
          if (!(alphabet.includes (input[i].toLowerCase ()))) {
            answer = answer + input[i];
          } else {
            let index = (actualAlpha.indexOf(input[i].toLowerCase ()))
            answer = answer + alphabet[index];
          }
        }
        return answer;
      }
    } else {
      let decoded = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          decoded = decoded + " ";
        } else {
          let index = alphabet.indexOf(input[i]);
          decoded = decoded + actualAlpha[index];
        }
      }
      return decoded;
    }
  }

  return {
    substitution,
  };
})();

module.exports = {
  substitution: substitutionModule.substitution
};