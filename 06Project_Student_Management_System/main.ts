#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bold.blueBright(`****Welcome to Student Management System App Created by Assad Sid****`));

let recordMain: string[] = []

async function smsApp() {
    let smsOperator = await inquirer.prompt({
        name: "operator",
        type: "list",
        choices: ["Insert-Record", "Update-Record", "Delete-Record", "All-Record", "Exit"],
        message: chalk.bold.yellowBright("Please Select your desired operator")
    })

    if(smsOperator.operator === "Insert-Record") {
        insertRecord();
    } else if(smsOperator.operator === "All-Record") {
        console.clear();
        allRecordMain()
        // console.log(recordMain)
    } else if(smsOperator.operator === "Update-Record") {
        updateRecord();
    } else if(smsOperator.operator === "Delete-Record") {
        deleteRecord();
    } else if(smsOperator.operator === "Exit") {
        console.log(chalk.bold.blueBright(`****Thank you for using CLI based Student Management System****`));
    }
};

async function insertRecord() {
    let insertApp = await inquirer.prompt([{
        name: "insertOp1",
        type: "input",
        message: "Please Enter Student ID:"
    },
    {
        name: "insertOp2",
        type: "input",
        message: "Please Enter Student Name:"
    },
    {
        name: "insertOp3",
        type: "list",
        choices: ["Science", "Commerce", "Arts"],
        message: "Please Select Your Course"
    }
    ])
    
    recordMain.push(`Student ID: ${insertApp.insertOp1}\nStudent Name: ${insertApp.insertOp2}\nCourses: ${insertApp.insertOp3}`);
    console.clear()
    console.log(chalk.bold.greenBright("***Your Information Recorded Successfully!***"))
    smsApp()
}

async function allRecordMain() {
    console.log(chalk.bold.yellowBright("****All Student Management Data Record****"));
        recordMain.map((record1) => {
        let recordIndex = recordMain.indexOf(record1) +1;
        console.log(chalk.bold.underline.greenBright(`\nStudent Data no.${recordIndex}`));
        console.log(record1);
        });
    smsApp()
}

async function updateRecord() {
    const editData = await inquirer.prompt([{
        name: "editNum",
        type: "number",
        message: "Please Enter the Student Data No. you want to Change:"
    },
    {
        name: "insertOp1",
        type: "input",
        message: "Please Enter New Student ID:"
    },
    {
        name: "insertOp2",
        type: "input",
        message: "Please Enter New Student Name:"
    },
    {
        name: "insertOp3",
        type: "list",
        choices: ["Science", "Commerce", "Arts"],
        message: "Please Select the New Course:"
    }    
    ])
    let indexNum = editData.editNum
    let newIndex = (`Student ID: ${editData.insertOp1}\nStudent Name: ${editData.insertOp2}\nCourses: ${editData.insertOp3}`);
    if(recordMain.length > 0) {
        recordMain.splice(indexNum -1, 1, newIndex);
    } else {
        console.log(chalk.bold.redBright("***No Data Found***"));
    }
    console.clear();
    console.log(chalk.bold.greenBright("****Information has been Updated into the Record****"));
    smsApp()
}

async function deleteRecord() {
    const delRecord = await inquirer.prompt({
        name: "delRecs",
        type: "input",
        message: "Please Enter the Student Data No. you want to Delete:"
    })

    let dataNum = delRecord.delRecs;
    if(recordMain.length > 0) {
        recordMain.splice(dataNum - 1, 1);
    } else {
        console.log(chalk.bold.redBright("***No Record Found***"));
    }
    console.clear()
    console.log(chalk.bold.greenBright("***The Requested Student Data has been Deleted!***"));
    smsApp()
}

smsApp()
