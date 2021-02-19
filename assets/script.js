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
  var specSelect = window.prompt("Special Characters? (Yes/No)");
  var numberSelect = window.prompt("Numerical Characters? (Yes/No)");
  var uppSelect = window.prompt("UpperCase Characters? (Yes/No)");
  var lowSelect = window.prompt("LowerCase Characters? (Yes/No)");

  //make all prompts match to uppercase
  specSelect = specSelect.toUpperCase();
  uppSelect = uppSelect.toUpperCase();
  lowSelect = lowSelect.toUpperCase();
  
  numberSelect = numberSelect.toUpperCase();
  if (specSelect === "YES" && numberSelect === "YES" && uppSelect === "YES" && lowSelect === "YES") {
    while (string.length < lengthSelect){
      randomSpec(specialCharacter)
      randomSpec(upperCase)
      randomSpec(lowerCase)
      randomSpec(numbers)  
      return string
//      specialCharacter [Math.floor(Math.random()*specialCharacter.length)]
//      lowerCase [Math.floor(Math.random()*lowerCase.length)]
//      upperCase [Math.floor(Math.random()*upperCase.length)]
//     numbers [Math.floor(Math.random()*numbers.length)]
//      string.push(specialCharacter [Math.floor(Math.random()*specialCharacter.length)])
//      string.push(lowerCase [Math.floor(Math.random()*lowerCase.length)])
//      string.push(upperCase [Math.floor(Math.random()*upperCase.length)])
//      string.push(numbers [Math.floor(Math.random()*numbers.length)])
    };
    console.log(string)
  } else if (specSelect === "YES" && numberSelect === "YES" && uppSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
      };

  } else if (specSelect === "YES" && numberSelect === "YES" && lowSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
      };

  } else if (specSelect === "YES" && uppSelect === "YES" && lowSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
    };

  } else if (numberSelect === "YES" && uppSelect === "YES" && lowSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
      };

  } else if (specSelect === "YES" && numberSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
      };

  } else if (specSelect === "YES" && uppSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
      };

  } else if (specSelect === "YES" && lowSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
      };

  } else if (numberSelect === "YES" && uppSelect === "YES") {
    while (string.length < lengthSelect){
      randomSpec(specialCharacter)
      randomSpec(upperCase)
      randomSpec(lowerCase)
      randomSpec(numbers) 
      return string
    };

  } else if (numberSelect === "YES" && lowSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
      };

  } else if (uppSelect === "YES" && lowSelect === "YES") {
      while (string.length < lengthSelect){
        randomSpec(specialCharacter)
        randomSpec(upperCase)
        randomSpec(lowerCase)
        randomSpec(numbers) 
        return string
      };

  } console.log(string)

  
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword)