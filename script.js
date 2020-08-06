// Assignment Code
var generateBtn = document.querySelector("#generate");

// Stores requirements for password
var passwordOptions = {
  useUppercase: true,
  useLowercase: true,
  useNumbers: true,
  useSpecialCharacters: true,
  passwordLength: 8
};

// Gets input from user and sets requirements for password
function setPasswordOptions() {
  setCharacterOptions();

  //Check that at least one character type is selected
  while (passwordOptions.useLowercase == false && passwordOptions.useUppercase == false && passwordOptions.useNumbers == false && passwordOptions.useSpecialCharacters == false) {
    alert("You need at least one type of character to generate a password.");
    setCharacterOptions();
  }

  passwordOptions.passwordLength = Number(prompt("How long should the password be?"));

  //Check that passwordOptions.passwordLength is a number between 8 and 128
  while (passwordOptions.passwordLength < 8 || passwordOptions.passwordLength > 128 || passwordOptions.passwordLength == NaN) {
    passwordOptions.passwordLength = prompt("The password length must be a number between 8 and 128. How long should the password be?");
  }
}

function setCharacterOptions() {
  passwordOptions.useLowercase = confirm("Use lowercase letters?");
  passwordOptions.useUppercase = confirm("Use uppercase letters?");
  passwordOptions.useNumbers = confirm("Use numbers?");
  passwordOptions.useSpecialCharacters = confirm("Use special characters?");
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

  // Adds lowercase letters to usable characters
  if (passwordOptions.useLowercase === true) {
    for (let i = 0; i < allLetters.length; i++) {
      useableCharacters.push(allLetters[i]);
    }
  }
  // Adds uppercase letters to usable characters
  if (passwordOptions.useUppercase === true) {
    for (let i = 0; i < allLetters.length; i++) {
      useableCharacters.push(allLetters[i].toUpperCase());
    }
  }
  // Adds numbers to usable characters
  if (passwordOptions.useNumbers === true) {
    for (let i = 0; i < 10; i++) {
      useableCharacters.push(0 + i);
    }
  }
  // Adds special characters to usable characters
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
  var generatedPassword = "";
  var useableCharacters = buildUseableCharactersArray();

  for (let i = 0; i < passwordOptions.passwordLength; i++) {
    let rand = Math.floor(Math.random() * useableCharacters.length);
    generatedPassword += useableCharacters[rand].toString();
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);