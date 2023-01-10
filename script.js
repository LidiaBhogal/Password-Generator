// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];






// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// // Function to generate password with user input
function generatePassword() {


  var passwordLength = prompt('How many characters would you like in your password 10-64?')
  if (passwordLength < 10 || passwordLength > 64) {
    alert(" that is not valid");

  } else {


    var upperCase = confirm(' Do you want upper case letters?');
    var lowerCase = confirm(' Do you want to use lower case letters?');
    var numbers = confirm(' do you want numbers in your password?');
    var special = confirm(' Do you want special characters?')
    var answers = []
    var finalPassword = ''



    if (upperCase) {
      answers.push(...upperCasedCharacters);
    };

    if (lowerCase) {
      answers.push(...lowerCasedCharacters)
    }
    if (numbers) {
      answers.push(...numericCharacters)

    }
    if (special) {
      answers.push(...specialCharacters)
    }


    for (let i = 0; i < passwordLength; i++) {
      console.log(i)
      finalPassword += answers[Math.floor(Math.random() * answers.length)]
    }
    console.log(finalPassword);
    return finalPassword;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



