# hw-3
for this assignment, I had the following acceptance criteria: 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

I started by creating variables for each of the different confirmations I would ask the user (password preferences they can choose from (true vs. false)): 
- uppercase 
- lowercase
- special characters 
- numbers 

After that, I created an empty string to use later (to push the randomly selected password into)

Next, I prompted the user to ask how many characters they would like their password to be. If the number they returned was greater than 128 or less than 8, it would return an empty string into the password generator. 

If they selected a valid number of characters, they were asked a series of confirmation statements to go ahead and make their password preference selections. 

For each true statement, I would push the related array into another empty array that was created inside of the function. 

Once all selections were made, I created a loop that was determined by the password length set by the user. 

That loop was set to randomly select from the arrays that were pushed into our empty array, and then taken a step further to randomly select items inside each of the arrays inside of the array. 

Once that was completed, I set my empty string to be += the randomly generated password and returned it to be shown on the screen once the user was through all of the prompts/confirmations. 

I used dev tools to console log my code throughout this process to make sure the code was working as expected. 
