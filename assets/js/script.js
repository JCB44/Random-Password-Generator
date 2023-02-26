var numberInput
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical lowercase characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Alphabetical uppercase characters
capsAlpha = alpha.join("").toUpperCase().split("")
function generatePassword(){
  console.log("button press")
var numberInput = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
if (!numberInput) {
  alert("You must choose the length");
  return;
} else if (numberInput < 8 || numberInput > 128) {
  numberInput = parseInt(prompt("You must choose between 8 and 128"));
  return;
}  
  confirmNumber = confirm("Include numbers?");
  confirmCharacter = confirm("Include special characters?");
  confirmUppercase = confirm("Include Uppercase letters?");
  confirmLowercase = confirm("Include Lowercase letters?");

if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose atleast one option");
  return;
}
var userchoice = []
if (confirmNumber){
  userchoice = userchoice.concat (number)
}
if (confirmCharacter){
  userchoice = userchoice.concat (character)
}
if (confirmUppercase){
  userchoice = userchoice.concat (capsAlpha)
}
if (confirmLowercase){
  userchoice = userchoice.concat (alpha)
}

var password = ""
for (var i = 0; i < numberInput; i++){
  var randomNum = Math.floor(Math.random()*userchoice.length)
var randomChar = userchoice[randomNum]
password = password + randomChar
}

  return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

}
