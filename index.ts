#! /usr/bin/env node
import inquirer from "inquirer";

 const randomNumber = Math.floor(Math.random() * 20 + 1);
 
const answer = await inquirer.prompt([
  {
    name: "userGuessednumber",
    type: "number",
    message: "please guess a number between 1-20: ",
  },
]);

if (answer.userGuessednumber === randomNumber) {
  console.log("Congratulations! You guess right number :)");
} else {
  console.log("OPPs! you guess wrong number TRY AGAIN :)");
}

console.log(randomNumber);



