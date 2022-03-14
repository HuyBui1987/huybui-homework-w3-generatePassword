// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //ask for password length
  var passLength = parseInt(prompt("Enter you password lenght between 8 to 128 Characters"));
  if (!passLength) {
    alert("Please enter the valid input");

  } else if (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("Your password length must be between 8 to 128 characters"));
    if (passLength < 8 || passLength > 128) {
      alert("INVALID INPUT");
    } else {
      var confirmNumber = confirm("Do you want to include number in your new password?");
      var confirmUppercase = confirm("Do you want to include Uppercase in your new password?");
      var confirmSpecialChar = confirm("Do you want to include special charactes in your new password?");
      var confirmlowercase = confirm("Do you want to include lowercase in your new password?");
    }

  } else {
    var confirmNumber = confirm("Do you want to include number in your new password?");
    var confirmUppercase = confirm("Do you want to include Uppercase in your new password?");
    var confirmSpecialChar = confirm("Do you want to include special charactes in your new password?");
    var confirmlowercase = confirm("Do you want to include lowercase in your new password?");
  }
  //no option has been chosen
  if (!confirmSpecialChar && !confirmNumber && !confirmUppercase && !confirmlowercase) {
    var userChoice = alert("You must choose at least one option above");
    // one option has been chosen
  } else if (confirmNumber && !confirmSpecialChar && !confirmUppercase && !confirmlowercase) {
    userChoice = number;
  } else if (confirmUppercase && !confirmNumber && !confirmSpecialChar && !confirmlowercase) {
    userChoice = upperCase;
  } else if (confirmSpecialChar && !confirmNumber && !confirmUppercase && !confirmlowercase) {
    userChoice = specialChar;
  } else if (confirmlowercase && !confirmSpecialChar && !confirmNumber && !confirmUppercase) {
    userChoice = lowerCase;

    // two options have been chosen
  } else if (confirmNumber && confirmSpecialChar) {
    userChoice = number.concat(specialChar);
  } else if (confirmNumber && confirmUppercase) {
    userChoice = number.concat(upperCase);
  } else if (confirmNumber && confirmlowercase) {
    userChoice = number.concat(lowerCase);
  } else if (confirmUppercase && confirmlowercase) {
    userChoice = upperCase.concat(lowerCase);
  } else if (confirmUppercase && confirmSpecialChar) {
    userChoice = upperCase.concat(specialChar);
  } else if (confirmlowercase && specialChar) {
    userChoice = lowerCase.concat(specialChar);

    // three options have been chosen  
  } else if (confirmNumber && confirmSpecialChar && confirmlowercase) {
    userChoice = number.concat(specialChar, lowerCase);
  } else if (confirmNumber && confirmSpecialChar && confirmUppercase) {
    userChoice = number.concat(specialChar, upperCase);
  } else if (confirmSpecialChar && confirmUppercase && confirmlowercase) {
    userChoice = specialChar.concat(upperCase, lowerCase);
  } else if (confirmNumber && confirmUppercase && confirmlowercase) {
    userChoice = number.concat(upperCase, lowerCase);

    //all options have been chosen  
  } else {
    userChoice = lowerCase.concat(upperCase, number, specialChar);
  }

  let newPassword = [];
  for (var i = 0; i < passLength; i++) {
    var randomPick = userChoice[Math.floor(Math.random() * userChoice.length)];
    newPassword.push(randomPick);
  }
  var password = newPassword.join("");
  return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

