// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberOptions = "0123456789".split("");
var specialCharOptions = "!@#$%^&*()_+[]{}|;:,.<>?".split("");

function generatePassword() {
  var userInputLength = prompt(
    "Enter the length of the password (between 8 and 128 characters):"
  );
  var passwordLength = parseInt(userInputLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert(
      "Pffft! Try again! Please enter a password length between 8 and 128 characters."
    );
    return;
  }

  var uppercase = confirm("Include uppercase letters?");
  var lowercase = confirm("Include lowercase letters?");
  var numbers = confirm("Include numbers?");
  var specialChars = confirm("Include special characters?");

  if (!uppercase && !lowercase && !numbers && !specialChars) {
    alert("Pffft! Try again! Please select at least one character type.");
    return;
  }

  var passwordGenerated = "";
  var options = [];

  if (uppercase) {
    options = options.concat(upperCaseOptions);
  }

  if (lowercase) {
    options = options.concat(lowerCaseOptions);
  }

  if (numbers) {
    options = options.concat(numberOptions);
  }

  if (specialChars) {
    options = options.concat(specialCharOptions);
  }

  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * options.length);
    passwordGenerated += options[random];
  }
  return passwordGenerated;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
