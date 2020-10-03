// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L",'M","N","O","P","Q","R","S","T","U","V","W","X","Y',"Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","/", "]","^","_","`","{","|","}","~"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function for all of the prompts and user selected criteria 
generateBtn.addEventListener("click", function (passCriteria) {

// storing a variable for the user's selected length "lengthPrompt", and then storing the answer as a parseINT
var lengthPrompt = prompt("how many characters would you like your password to be? Please choose at least 8 characters, and no more than 128 characters.");
lengthPrompt = parseInt(lengthPrompt)

if (lengthPrompt>=8 && lengthPrompt<=128) {
    console.log(lengthPrompt);
    console.log(generatedpassnew);

}

else { 
    alert("please enter a number between 8 and 128!");
    return;
}
}

// Special characters loop 

// var confirmSpec = confirm("Would you like your password to contain special characters?")
//     console.log(confirmSpec);

// if (confirmSpec) {
//     for (var i=0; i<(special.length); i++) {
//         var randomSpec = special[Math.floor(Math.random()*special.length)];
//     }
//     console.log(randomSpec);

// }

// var confirmLower = confirm("include lower cases?");

// var confirmUpper = confirm("include uppercase?");

// var confirmNum = confirm("inlcude numbers?");
// }

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", passCriteria); 