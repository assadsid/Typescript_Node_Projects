#! /usr/bin/env node
import { sum01 } from "./operations/add.js";
import { sub01 } from "./operations/sub.js";
import { mul01 } from "./operations/mul.js";
import { div01 } from "./operations/div.js";
import { mod01 } from "./operations/mod.js";
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "num2"
    },
    {
        message: "Select Operator",
        type: "list",
        choices: ["+", "-", "*", "/", "%"],
        name: "Operator"
    }
]);
if (answer.Operator === "+") {
    let result = sum01(answer.num1, answer.num2);
    console.log(`Your result is ${result}`);
}
else if (answer.Operator === "-") {
    let result = sub01(answer.num1, answer.num2);
    console.log(`Your result is ${result}`);
}
else if (answer.Operator === "*") {
    let result = mul01(answer.num1, answer.num2);
    console.log(`Your result is ${result}`);
}
else if (answer.Operator === "/") {
    let result = div01(answer.num1, answer.num2);
    console.log(`Your result is ${result}`);
}
else if (answer.Operator === "%") {
    let result = mod01(answer.num1, answer.num2);
    console.log(`Your result is ${result}`);
}
