#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const waitFunc = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
};
async function welcomTitle() {
    let mainWelcomeTitle = chalkAnimation.rainbow("****Welcome to Countdown Timer App created by Assad Sid****");
    await waitFunc();
    mainWelcomeTitle.stop();
}
await welcomTitle();
async function mainAppCT() {
    const userInput = await inquirer.prompt({
        name: "userMain",
        type: "input",
        message: chalk.bold.magentaBright("Please enter the 'SECONDS' in number:")
    });
    let userInputVar = userInput.userMain;
    const timerMain = () => {
        console.clear();
        if (userInputVar > 0) {
            console.log(chalk.bold.greenBright(`Your Countdown Timer is Start Now!\nTime Left = ${userInputVar}`));
            setTimeout(timerMain, 1000);
            userInputVar -= 1;
        }
        else {
            console.log(chalk.bold.italic.blueBright(" ***Countdown Timer is Completed Now*** "));
            restartCounter();
        }
    };
    console.clear();
    setTimeout(timerMain);
}
mainAppCT();
async function restartCounter() {
    let userInput2 = await inquirer.prompt({
        name: "userRestart",
        type: "list",
        choices: ["Yes", "No"],
        message: chalk.bold.magentaBright("Do you want to Restart the Countdown Timer?")
    });
    let userRequest = userInput2.userRestart;
    if (userRequest === "Yes") {
        mainAppCT();
    }
    else if (userRequest === "No") {
        console.log(chalk.bold.yellowBright(" ****Thank you for using the Countdown Timer App**** "));
    }
}
