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

// Returns an array of useable characters depending on options from passwordOptions
function buildUseableCharactersArray() {
  var useableCharacters = [];
  var allLetters = [
    "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z"
  ];
  var allSpecialCharacters = [
    "!", "#", "$", "%", "&", "'", "(", ")",
    "*", "+", ",", "-", ".", "/", ":", ";",
    "<", "=", ">", "?", "@", "[", "]", "^",
    "_", "`", "{", "|", "}", "~"
  ]

  if (passwordOptions.useLowercase === true) {
    for (let i = 0; i < allLetters.length; i++) {
      useableCharacters.push(allLetters[i]);
    }
  }
  if (passwordOptions.useUppercase === true) {
    for (let i = 0; i < allLetters.length; i++) {
      useableCharacters.push(allLetters[i].toUpperCase());
    }
  }
  if (passwordOptions.useNumbers === true) {
    for (let i = 0; i < 10; i++) {
      useableCharacters.push(0 + i);
    }
  }
  if (passwordOptions.useSpecialCharacters === true) {
    for (let i = 0; i < allSpecialCharacters.length; i++) {
      useableCharacters.push(allSpecialCharacters[i]);
    }
  }

  return useableCharacters;
}

// Runs when 'Generate Password' button is pressed
function generatePassword() {
  setPasswordOptions();
  var useableCharacters = buildUseableCharactersArray();

  console.log(useableCharacters);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
