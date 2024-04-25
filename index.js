#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Tahira - CLI Number  Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuestNumber",
        type: "number",
        message: "Enter You Guess Number (Number Limit from 1 to 5.):",
    }
]);
if (answer.userGuestNumber === randomNumber) {
    console.log("Congratulation ! You Guess a Correct Number.");
}
else {
    console.log("Sorry, You Guess A Rong Number");
}
