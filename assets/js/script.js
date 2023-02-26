// Assignment code here
var numberInput
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// caps = alpha.toUpperCase()
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

//1. promt user with criteria                        #/#
// a. password length                                #/#
// b. lowercase, uppercase, special characters       #/#
//2. validate the input
//3. generate passwrod

for (var i = 0; i < enter; i++){
  var randomNum = Math.floor(Math.random()*alpha.length)
console.log (randomNum)
var randomChar = alpha[randomNum]
console.log (randomChar)
}



//4. display password to the page
  return "Output"
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
