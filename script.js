// Assignment Code
var generateBtn = document.querySelector("#generate");

// Stores requirements for password
var passwordOptions = {
  useUppercase: true,
  useLowercase: true,
  useNumbers: true,
  useSpecialCharacters: true,
  passwordLength: 8
}

// Gets input from user and sets requirements for password
function setPasswordOptions() {
  passwordOptions.useLowercase = confirm("Use lowercase letters?");
  passwordOptions.useUppercase = confirm("Use uppercase letters?");
  passwordOptions.useNumbers = confirm("Use numbers?");
  passwordOptions.useSpecialCharacters = confirm("Use special characters?");
  passwordOptions.passwordLength = prompt("How long should the password be?")
}

// Runs when 'Generate Password' button is pressed
function generatePassword() {
  setPasswordOptions();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
