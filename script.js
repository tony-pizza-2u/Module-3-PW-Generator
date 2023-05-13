// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercaseCharacters = "abcdefghijklmnopqurstuvwxyz"
var numbers = "1234567890"
var special = "!@#"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var options = ""
  var length = prompt("How long would you like your password to be? (must be between 8-128 characters )");
  if (length < 8 || length > 128) {
    alert("must be between 8-128 characters ");
    return generatePassword();
  }
 var needsUppercase = confirm("Would you like to add an uppercase character(s)");
 var needsLowercase = confirm("Would you like to add a lowercase character(s)");
 var needsNumbers = confirm("Would you like to add a numerical character(s)");
 var specialCharacters = confirm("Would you like to add special character(s)");
 if (!needsUppercase && !needsLowercase && !needsNumbers && !specialCharacters){
  alert ("You must choose at least 1 option")
  return generatePassword();
 }
 if (needsUppercase){
  options += uppercaseCharacters
 }
 if (needsLowercase){
  options += lowercaseCharacters
 }
 if (needsNumbers){
  options+= numbers
 }
 if (specialCharacters){
  options += special
 }
var password = ""
for (i = 0 ; i < length; i++) {
  var randomIndex = Math.floor(Math.random ()* options.length)
  var randomChar = options[randomIndex]
  password += randomChar
}
return password
}

