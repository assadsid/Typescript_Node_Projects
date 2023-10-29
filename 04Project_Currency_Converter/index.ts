#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.magentaBright(`****Welcome To the Currency Exchange****\n`));

console.log(chalk.cyanBright(`\tToday Currency Rates in PKR = Pak Rupees
SAR - Saudi Riyal = 79.18PKR
USD - US Dollar = 297.03PKR
GBP - Pound Sterling = 367.89
EUR - Euro = 317.30PKR\n`));

console.log("Today Currency Rates in PKR");

let mainHead = await inquirer.prompt([{
    name: "selectCurr",
    type: "list",
    choices: ["PKR"],
    message: "Please Select your Country Currency"
},
{
    name: "selectConv",
    type: "list",
    choices: ["SAR", "USD", "GBP", "EUR"],
    message: "Please Select your Conversion Currency"
},
{
    name: "selectAmount",
    type: "input",
    message: "Please Enter your Conversion Amount"
}
]);

if(mainHead.selectCurr === "PKR" && mainHead.selectConv === "SAR") {
    let result = mainHead.selectAmount / 79.18;
    console.log("Your Conversion from PKR to SAR is " + Math.round(result) + "/-");
} else if(mainHead.selectCurr == "PKR" && mainHead.selectConv === "USD") {
    let result = mainHead.selectAmount / 297.03;
    console.log("Your Conversion from PKR to USD is " + Math.round(result) + "/-");
} else if(mainHead.selectCurr === "PKR" && mainHead.selectConv === "GBP") {
    let result = mainHead.selectAmount / 367.89;
    console.log("Your Conversion from PKR to GBP is " + Math.round(result) + "/-");
} else if(mainHead.selectCurr === "PKR" && mainHead.selectConv === "EUR") {
    let result = mainHead.selectAmount / 317.30;
    console.log("Your Conversion from PKR to Eur is " + Math.round(result) + "/-");
};