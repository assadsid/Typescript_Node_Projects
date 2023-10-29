#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";



console.log(chalk.bold.blueBright("****Welcome to the Words & Characters Count App****"));


function characterCount(paragraph:string) {
    let spaceFree = paragraph.replace(/\s/g,"");
    return spaceFree.length
}

function wordCountMain(paragraph:string) {
    let wordCount = paragraph.split(" ")
    function checkString(element:string){
        return typeof element === "string"
    }
        return wordCount.length
}

async function userInput(characterCount:(text:string) => number, wordCountMain:(text:string) => number) {
    let response = await inquirer.prompt({
        type: "input",
        message: "Please enter your text here:",
        name: "paragraph"
    })

    console.log(chalk.bold.greenBright("Total Characters Count = " + characterCount(response.paragraph)));
    console.log(chalk.bold.greenBright("Total Words Count = " + wordCountMain(response.paragraph)));

}

userInput(characterCount, wordCountMain );