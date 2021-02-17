var string = [];
var specialCharacter = '!"#$%&()*+,-./:;<>=?@[]_{}|~';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
randomSpec = (typeOfCharacter) => {
  var selectedCharacter = typeOfCharacter [Math.floor(Math.random()*typeOfCharacter.length)]
  string.push(selectedCharacter)
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lengthSelect = window.prompt("Length of Password? (8 to 128)");
  var specSelect = window.prompt("Special Characters? (Yes/No)");
  var numberSelect = window.prompt("Numerical Characters? (Yes/No)");
  var uppSelect = window.prompt("UpperCase Characters? (Yes/No)");
  var lowSelect = window.prompt("LowerCase Characters? (Yes/No)");
  specSelect = specSelect.toUpperCase();
  uppSelect = uppSelect.toUpperCase();
  lowSelect = lowSelect.toUpperCase();
  numberSelect = numberSelect.toUpperCase();
  var characters = '';
  if (specSelect === "YES" || numberSelect === "YES" || uppSelect === "YES" || lowSelect === "YES") {
    console.log("YAY")
    console.log(lengthSelect)
    while (string.length < lengthSelect){
      randomSpec(specialCharacter)
      randomSpec(upperCase)
      randomSpec(lowerCase)
      randomSpec(numbers)  
//      specialCharacter [Math.floor(Math.random()*specialCharacter.length)]
//      lowerCase [Math.floor(Math.random()*lowerCase.length)]
//      upperCase [Math.floor(Math.random()*upperCase.length)]
//     numbers [Math.floor(Math.random()*numbers.length)]
//      string.push(specialCharacter [Math.floor(Math.random()*specialCharacter.length)])
//      string.push(lowerCase [Math.floor(Math.random()*lowerCase.length)])
//      string.push(upperCase [Math.floor(Math.random()*upperCase.length)])
//      string.push(numbers [Math.floor(Math.random()*numbers.length)])
    }
    console.log(string)
    characters = string.concat(specialCharacter, numbers, upperCase, lowerCase);
  } else if (specSelect === "YES" && numberSelect === "YES" && uppSelect === "YES") {
    characters = string.concat(specialCharacter, numbers, upperCase);
  } else if (specSelect === "YES" && numberSelect === "YES" && lowSelect === "YES") {
    characters = string.concat(specialCharacter, numbers, lowerCase);
  } else if (specSelect === "YES" && uppSelect === "YES" && lowSelect === "YES") {
    characters = string.concat(specialCharacter, upperCase, lowerCase);
  } else if (numberSelect === "YES" && uppSelect === "YES" && lowSelect === "YES") {
    characters = string.concat(numbers, upperCase, lowerCase);
  } else if (specSelect === "YES" && numberSelect === "YES") {
    characters = string.concat(specialCharacter, numbers);
  } else if (specSelect === "YES" && uppSelect === "YES") {
    characters = string.concat(specialCharacter, upperCase);
  } else if (specSelect === "YES" && lowSelect === "YES") {
    characters = string.concat(specialCharacter, lowerCase);
  } else if (numberSelect === "YES" && uppSelect === "YES") {
    characters = string.concat(numbers, upperCase);
  } else if (numberSelect === "YES" && lowSelect === "YES") {
    characters = string.concat(numbers, lowerCase);
  } else if (uppSelect === "YES" && lowSelect === "YES") {
    
    characters = string.concat(upperCase, lowerCase);
  }
  
  

  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword)