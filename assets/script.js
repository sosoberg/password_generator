
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
    lengthSelect = manyLengthSelect;
  } else if (lengthSelect < 8) {
    fewLengthSelect = window.prompt("Too few characters, please try again (1 to 128)")
    lengthSelect = fewLengthSelect;
  }

  // if user fails a second time to meet requirements, end the program
  if (lengthSelect > 128) {
    return;
  } else if (lengthSelect <8) {
    return;
  }

  var specSelect = window.confirm("Special Characters? (Yes/No)");
  var numberSelect = window.confirm("Numerical Characters? (Yes/No)");
  var uppSelect = window.confirm("UpperCase Characters? (Yes/No)");
  var lowerSelect = window.confirm("LowerCase Characters? (Yes/No)");

  // if functions to select from local data based upon users input
  if (specSelect === true && numberSelect === true && uppSelect === true && lowerSelect === true) {
    while (string.length < lengthSelect) {
      randomSpec(specialCharacter);
      randomSpec(upperCase);
      randomSpec(lowerCase);
      randomSpec(numbers);
    };
  
  } else if (specSelect === true && numberSelect === true && uppSelect === true) {
    while (string.length < lengthSelect) {
      randomSpec(specialCharacter);
      randomSpec(upperCase);
      randomSpec(numbers);
    };

  } else if (specSelect === true && numberSelect === true && lowerSelect === true) {
    while (string.length < lengthSelect) {
      randomSpec(specialCharacter);
      randomSpec(lowerCase);
      randomSpec(numbers);
    };

  } else if (specSelect === true && uppSelect === true && lowerSelect === true) {
    while (string.length < lengthSelect) {
      randomSpec(specialCharacter);
      randomSpec(upperCase);
      randomSpec(lowerCase);
    };
  
  } else if (numberSelect === true && uppSelect === true && lowerSelect === true) {
    while (string.length < lengthSelect) {
      randomSpec(upperCase);
      randomSpec(lowerCase);
      randomSpec(numbers);
    };

  } else if (specSelect === true && numberSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(specialCharacter);
        randomSpec(numbers);
      };

  } else if (specSelect === true && uppSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(specialCharacter);
        randomSpec(upperCase);
    };

  } else if (numberSelect === true && uppSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(upperCase);
        randomSpec(numbers);
      };

  } else if (numberSelect === true && lowerSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(numberSelect);
        randomSpec(lowerCase);
      };

  } else if (lowerSelect === true && uppSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(upperCase);
        randomSpec(lowerCase);
      };

  } else if (lowerSelect === true && specSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(specSelect);
        randomSpec(lowerCase);
      };

  } else if (specSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(specialCharacter);
      };

  } else if (numberSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(numbers);
      };

  } else if (uppSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(upperCase);
      };
  
  } else if (lowerSelect === true) {
      while (string.length < lengthSelect) {
        randomSpec(lowerCase);
      };

  } else {
    while (string.length < lengthSelect) {
      randomSpec(lowerCase);
    }
  }

  // for loop to remove characters over lengthSelect value
  for (let i = string.length; i > lengthSelect; i--) {
    var something = string.pop();
    console.log(something)
  }

  // remove the commas of the Array
  var joinedString = string.join('');

  //insert the data from the function into the HTML div class
  document.getElementById('password').innerHTML = joinedString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword)