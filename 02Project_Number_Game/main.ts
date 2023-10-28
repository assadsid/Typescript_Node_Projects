#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let ranNum = Math.floor(Math.random() * 2);

console.log(ranNum);

let user = await inquirer.prompt({
    name: 'num01',
    type: 'list',
    message: "Select the Number Please: ",
    choices: ["0", "1"],
});

if (ranNum === parseInt(user.num01)) {
    console.log(chalk.bold.greenBright("Access Granted"));
} else {
    console.log(chalk.bold.redBright("Sorry, please try again!"));
}