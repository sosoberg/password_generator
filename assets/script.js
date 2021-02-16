var string = '';
var specialCharacter = '!"#$%&()*+,-./:;<>=?@[]_{}|~';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var specSelect = window.prompt("Special Characters? (Yes/No)");
  var numberSelect = window.prompt("Numerical Characters? (Yes/No)");
  var uppSelect = window.prompt("UpperCase Characters? (Yes/No)");
  var lowSelect = window.prompt("LowerCase Characters? (Yes/No)");
  var lengthSelect = window.prompt("Length of Password? (8 to 128)");
  specSelect = specSelect.toUpperCase;
  uppSelect = uppSelect.toUpperCase;
  lowSelect = lowSelect.toUpperCase;
  numberSelect = numberSelect.toUpperCase;
  var characters = '';
  if (specSelect === "YES" && numberSelect === "YES" && uppSelect === "YES" && lowSelect === "YES") {
    characters = string.concat(specialCharacter, numbers, upperCase, lowerCase);
  } else if (specSelect && numberSelect && uppSelect === "YES") {
    characters = string.concat(specialCharacter, numbers, upperCase);
  } else if (specSelect && numberSelect && lowSelect === "YES") {
    characters = string.concat(specialCharacter, numbers, lowerCase);
  } else if (specSelect && uppSelect && lowSelect === "YES") {
    characters = string.concat(specialCharacter, upperCase, lowerCase);
  } else if (numberSelect && uppSelect && lowSelect === "YES") {
    characters = string.concat(numbers, upperCase, lowerCase);
  } else if (specSelect && numberSelect === "YES") {
    characters = string.concat(specialCharacter, numbers);
  } else if (specSelect && uppSelect === "YES") {
    characters = string.concat(specialCharacter, upperCase);
  } else if (specSelect && lowSelect === "YES") {
    characters = string.concat(specialCharacter, lowerCase);
  } else if (numberSelect && uppSelect === "YES") {
    characters = string.concat(numbers, upperCase);
  } else if (numberSelect && lowSelect === "YES") {
    characters = string.concat(numbers, lowerCase);
  } else if (uppSelect && lowSelect === "YES") {
    characters = string.concat(upperCase, lowerCase);
  }
  console.log(characters)
  

  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword)