
// optional variables that we will select from in the function
var string = [];
var specialCharacter = '!"#$%&()*+,-./:;<>=?@[]_{}|~';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';

//Math.random function to be called later in the writePassword function
randomSpec = (typeOfCharacter) => {
  var selectedCharacter = typeOfCharacter [Math.floor(Math.random()*typeOfCharacter.length)]
  string.push(selectedCharacter)
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthSelect = window.prompt("Length of Password? (8 to 128)");

  // if statement to make sure length fits in character requirements
  if (lengthSelect > 128) {
    manyLengthSelect = window.prompt("Too many characters, please try again(1 to 128")
    lengthSelect = manyLengthSelect
  } else if (lengthSelect < 8) {
    fewLengthSelect = window.prompt("Too few characters, please try again (1 to 128)")
    lengthSelect = fewLengthSelect
  }

  // if user fails a second time to meet requirements, end the program
  if (lengthSelect > 128) {
    return;
  } else if (lengthSelect <8) {
    return;
  }
  var specSelect = window.prompt("Special Characters? (Yes/No)");
  var numberSelect = window.prompt("Numerical Characters? (Yes/No)");
  var uppSelect = window.prompt("UpperCase Characters? (Yes/No)");

  // make all prompts match to uppercase
  specSelect = specSelect.toUpperCase();
  uppSelect = uppSelect.toUpperCase();
  numberSelect = numberSelect.toUpperCase();

  if (lengthSelect < 8) {
    return;
  }

  if (specSelect === "YES" && numberSelect === "YES" && uppSelect === "YES") {
    while (string.length < lengthSelect) {
      randomSpec(specialCharacter);
      randomSpec(upperCase);
      randomSpec(lowerCase);
      randomSpec(numbers);
    };

  } else if (specSelect === "YES" && numberSelect === "YES") {
      while (string.length < lengthSelect) {
        randomSpec(specialCharacter);
        randomSpec(lowerCase);
        randomSpec(numbers);
      };

  } else if (specSelect === "YES" && uppSelect === "YES") {
      while (string.length < lengthSelect) {
        randomSpec(specialCharacter);
        randomSpec(upperCase);
        randomSpec(lowerCase);
    };

  } else if (numberSelect === "YES" && uppSelect === "YES") {
      while (string.length < lengthSelect) {
        randomSpec(upperCase);
        randomSpec(lowerCase);
        randomSpec(numbers);
      };

  } else if (specSelect === "YES" && numberSelect === "YES") {
      while (string.length < lengthSelect) {
        randomSpec(specialCharacter);
        randomSpec(lowerCase);
        randomSpec(numbers);
      };

  } else if (specSelect === "YES" && uppSelect === "YES") {
      while (string.length < lengthSelect) {
        randomSpec(specialCharacter);
        randomSpec(upperCase);
        randomSpec(lowerCase);
      };

  } else if (specSelect === "YES") {
      while (string.length < lengthSelect) {
        randomSpec(specialCharacter);
        randomSpec(lowerCase);
      };

  } else if (numberSelect === "YES" && uppSelect === "YES") {
    while (string.length < lengthSelect) {
      randomSpec(upperCase);
      randomSpec(lowerCase);
      randomSpec(numbers);
    };

  } else if (numberSelect === "YES") {
      while (string.length < lengthSelect) {
        randomSpec(lowerCase);
        randomSpec(numbers);
      };

  } else if (uppSelect === "YES") {
      while (string.length < lengthSelect) {
        randomSpec(upperCase);
        randomSpec(lowerCase);
      };

  } else {
    while (string.length < lengthSelect) {
      randomSpec(lowerCase);
    }
  } console.log(string)
  var joinedString = string.join('');
  document.getElementById('password').innerHTML = joinedString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword)