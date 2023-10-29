#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(`Welcome to My QuizApp create by Assad Sid`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function AskQuestion() {
    const answers = await inquirer.prompt([{
            type: "list",
            name: "question1",
            choices: ["Python", "JavaScript"],
            message: "Typescript is a superset of??",
        },
        {
            type: "list",
            name: "question2",
            choices: ["1995", "1998"],
            message: "JavaScript originates from year??",
        },
        {
            type: "list",
            name: "question3",
            choices: ["JavaScript", "Typescript"],
            message: "The only language that browser understand is??",
        }
    ]);
    if (answers.question1 === "JavaScript") {
        console.log(chalk.bold.greenBright("Answer is correct"));
    }
    else {
        console.log(chalk.bold.redBright("Answer is not correct"));
    }
    if (answers.question2 === "1995") {
        console.log(chalk.bold.greenBright("Answer is correct"));
    }
    else {
        console.log(chalk.bold.redBright("Answer is not correct"));
    }
    if (answers.question3 === "JavaScript") {
        console.log(chalk.bold.greenBright("Answer is correct"));
    }
    else {
        console.log(chalk.bold.redBright("Answer is not correct"));
    }
}
AskQuestion();
