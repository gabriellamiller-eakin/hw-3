// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L",'M","N","O","P","Q","R","S","T","U","V","W","X","Y',"Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","/", "]","^","_","`","{","|","}","~"]

var finalPass = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// defining the function for what happens above with generate password 

function generatePassword () {

// if the user does not pick a number between 8 & 128, it returns an empty string
  
var passLength = prompt("how long do you want your password to be?");
if (passLength>128 || passLength<8) {
  return "";
}

// creating an empty array to push the other arrays into depending on what the user chooses as true vs. false 

var passwordSelections = [];

// confirm items for the user to select what they would like the pass criteria to be 

var charLower = confirm("do you want your password to include lowercase?")

var charUpper = confirm("do you want your password to include uppercase?")

var charNum = confirm("do you want your password to include numbers?")

var charSpec = confirm("do you want your password to include special characters?")

// for true on each of the above statements, this code pushes the arrays defined above into our new empty array 
if (charLower) {
  passwordSelections.push(lowercase);
}

if (charUpper) {
  passwordSelections.push(uppercase);
}

if (charNum) {
  passwordSelections.push(numeric);
}

if (charSpec) {
  passwordSelections.push(special);
}

console.log(passwordSelections);

// we want this to loop the number of times set by the user, and then to randomly select from the password selections array 
for (var i=0; i<passLength; i++) {

  var randomSelections = Math.floor(Math.random()*passwordSelections.length);
  console.log(randomSelections);
  var randompassgen = passwordSelections[randomSelections];
  console.log(randompassgen);
   // when we did this random select, it returned random arrays inside of our array, so now we need to do another random math function to randomly select items within each array to return 
  var randomfinal = randompassgen[Math.floor(Math.random()*randompassgen.length)]
  console.log(randomfinal);

  // now we need to set finalPass to equal the random password we generated above. 
  finalPass += randomfinal;
}

// return final pass will put the randomly generated password into our password box in the HTML

return finalPass;
}

// when the button is clicked, the random password is displayed! 

generateBtn.addEventListener("click", writePassword) 
