#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation"


interface userDetails {
    userId: string,
    userPin: number,
    WelcomeMenu: string,
    FastCash: number,
    WithDraw: number,
    balInquiry: string
};

const userInfo: userDetails = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: chalk.blueBright("Username Please?")
    },
    {
        type: "number",
        name: "userPin",
        message: chalk.blueBright("Enter the PIN please?")
    },
    {
        type: "list",
        name: "WelcomeMenu",
        message: chalk.yellowBright(`Welcome, please select your desired menu`),
        choices: ["Fast Cash", "Withdraw", "Balance Inquiry", "Fund Transfer"]
    },
    {
        type: "list",
        name: "FastCash",
        message: chalk.cyanBright("Please select your desired amount"),
        choices: [500, 1000, 2000, 5000],
        when(userInfo) {
            return userInfo.WelcomeMenu == "Fast Cash"
        }
    },
    {
        type: "number",
        name: "WithDraw",
        message: chalk.cyanBright("Please enter your amount"),
            when(userInfo) {
            return userInfo.WelcomeMenu == "Withdraw"
        }
    },
]);

// console.log(userInfo);

if(userInfo.FastCash === 500) {
    let cashWithdraw = 500;
    let userAmount = 50000 - 500;
    console.log(chalk.bold.greenBright(`You have successfully withdraw Rs. ${cashWithdraw}/-\nYour remaining balance is Rs.${userAmount}/-`));
} else if (userInfo.FastCash === 1000) {
    let cashWithdraw = 1000;
    let userAmount = 50000 - 1000;
    console.log(chalk.bold.greenBright(`You have successfully withdraw Rs. ${cashWithdraw}/-\nYour remaining balance is Rs.${userAmount}/-`));
} else if (userInfo.FastCash === 2000) {
    let cashWithdraw = 2000;
    let userAmount = 50000 - 2000;
    console.log(chalk.bold.greenBright(`You have successfully withdraw Rs. ${cashWithdraw}/-\nYour remaining balance is Rs.${userAmount}/-`));
} else if (userInfo.FastCash === 5000) {
    let cashWithdraw = 5000;
    let userAmount = 50000 - 5000;
    console.log(chalk.bold.greenBright(`You have successfully withdraw Rs. ${cashWithdraw}/-\nYour remaining balance is Rs.${userAmount}/-`));
};

const userInputAmount = userInfo.WithDraw
if(userInputAmount < 50000) {
    let balanceAmount = 50000 - userInputAmount;
    console.log(chalk.bold.greenBright(`You have successfully withdraw Rs.${userInputAmount}/-\nYour remaining balance is ${balanceAmount}/-`));
} else if (userInputAmount > 50000) {
    console.log(chalk.bold.redBright("You have insufficient amount, please try again later."));
};

if(userInfo.WelcomeMenu == "Balance Inquiry") {
    // return userInfo.balInquiry
    console.log(chalk.bold.italic.black.bgWhiteBright("You account balance is Rs. 50,000/-"));
};