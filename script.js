
// special characters between double quotes  " !"#$%&'()*+,-./:;<=>?@[\]^_{|}~"
// Space	U+0020
// 	Exclamation	U+0021
// 	Double quote	U+0022
// Number sign (hash)	U+0023
// 	Dollar sign	U+0024
// 	Percent	U+0025
// 	Ampersand	U+0026
// 	Single quote	U+0027
// 	Left parenthesis	U+0028
// 	Right parenthesis	U+0029
// 	Asterisk	U+002A
// 	Plus	U+002B
// 	Comma	U+002C
// 	Minus	U+002D
// 	Full stop	U+002E
// 	Slash	U+002F
// 	Colon	U+003A
// 	Semicolon	U+003B
// 	Less than	U+003C
// 	Equal sign	U+003D
// 	Greater than	U+003E
// 	Question mark	U+003F
// 	At sign	U+0040
// 	Left bracket	U+005B
// 	Backslash	U+005C
// 	Right bracket	U+005D
// 	Caret	U+005E
// 	Underscore	U+005F
// 	Grave accent (backtick)	U+0060
// 	Left brace	U+007B
// 	Vertical bar	U+007C
// 	Right brace	U+007D
// 	Tilde	U+007E


// *click button to gen password
// *then series of prompts for ctireria
// *select criteria
// *ask password length (between 8 and 128)
// *ask character types
// *between  lowercase, uppercase, numeric, and/or special characters
// *at least 1 must be selected
// *password gen matches selected criteria 
// *password is either displayed in an alert or written to the page


var letterLowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpperOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacterOptions = ["/!", "/#", "/$", "/%", "/&", "/'", "/(", "/)", "/*", "/+", "/,", "/-", "/.", "//", "/:", "/;", "/<", "/=", "/>", "/?", "/@", "/[", "/]", "/^", "/_", "/{", "/|", "/}", "/~"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerLetterSelected = Math.floor(Math.random() * letterLowerOptions.length);
var lowerSelected = letterLowerOptions[lowerLetterSelected];

var upperLetterSelected = Math.floor(Math.random() * letterUpperOptions.length);
var upperSelected = letterUpperOptions[upperLetterSelected];

var numberSelected = Math.floor(Math.random() * numberOptions.length);
var number = numberOptions[numberSelected];

var specialCharacterSelected = Math.floor(Math.random() * specialCharacterOptions.length);
var specialCharacter = specialCharacterOptions[specialCharacterSelected];