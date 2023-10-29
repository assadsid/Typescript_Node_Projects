#! /usr/bin/env node

import { faker } from "@faker-js/faker"
import chalk from "chalk"
import inquirer from "inquirer"


// Customer Class
class Customer {
    firstName: string
    lastName: string
    age: number
    gender: string
    mobNum: number
    accNum: number

    constructor(fName1:string,lName1:string,age1:number,gen1:string,mobNum1:number,accNum1:number){
        this.firstName = fName1
        this.lastName = lName1
        this.age = age1
        this.gender = gen1
        this.mobNum = mobNum1
        this.accNum = accNum1
    }
}

// Bank Account Interface
interface BankAccount {
    accNumber: number,
    balance: number,
}

// Bank Class
class Bank {
    customer: Customer[] = [];
    account: BankAccount[] = [];

    addCustomer(obj: Customer){
        this.customer.push(obj);
    }

    addAccountNum(obj:BankAccount){
        this.account.push(obj)
    }
    transaction(accObj:BankAccount){
        let newAccounts = this.account.filter((acc) => acc.accNumber !== accObj.accNumber);
        this.account = [...newAccounts, accObj];
    }
}

let myBank = new Bank();
// console.log(myBank);
// let cust = new Customer ("Assad", "Siddiqui", 32, "Male", 3121234567, 123456789)

// Create Customer
for(let i:number = 1; i<=3; i++){
    let fName = faker.person.firstName('male')
    let lName = faker.person.lastName()
    let num = parseInt(faker.phone.number('3#########'));
    const cusDet = new Customer(fName, lName, 25*i, "Male", num, 1000+i)
    myBank.addCustomer(cusDet);
    myBank.addAccountNum({accNumber: cusDet.accNum, balance: 1000*i})
}

// Bank Functionality
async function bankService(bank:Bank) {
    do{
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please Select the Services:",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"]
        })
    
        // View Balance
        if(service.select == "View Balance"){
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:"
            });
            let account = myBank.account.find((acc)=>acc.accNumber == res.num)
            if(!account){
                console.log(chalk.red.bold("Invalid Account Number"))
            }
            if(account){
                let name = myBank.customer.find((item) => item.accNum == account?.accNumber)
                console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} your account balance is ${chalk.bold.blueBright("$", account.balance)}`)
            }
        }
    
        // Cash Withdraw
        if(service.select == "Cash Withdraw"){
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:"
            });
            let account = myBank.account.find((acc)=>acc.accNumber == res.num)
            if(!account){
                console.log(chalk.red.bold("Invalid Account Number"))
            }
            if(account){
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter your Amount:",
                    name: "rupee"
                });
                if(ans.rupee > account.balance){
                    console.log(chalk.red.bold("You have Insufficient Balance for Withdraw."))
                }
                let newBalance = account.balance - ans.rupee
                bank.transaction({accNumber:account.accNumber, balance:newBalance});
                // console.log(chalk.bold.yellow(`Dear Customer, your remaining balance is ${newBalance}.`));
            }
        }
    
        // Cash Deposit
        if(service.select == "Cash Deposit"){
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter your Account Number:"
            });
            let account = myBank.account.find((acc)=>acc.accNumber == res.num)
            if(!account){
                console.log(chalk.red.bold("Invalid Account Number"))
            }
            if(account){
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter your Amount:",
                    name: "rupee"
                });
                let newBalance = account.balance + ans.rupee
                bank.transaction({accNumber:account.accNumber, balance:newBalance});
                // console.log(chalk.bold.yellow(`Dear Customer, your account balance is ${newBalance}.`));
            }
        }
        if(service.select == "Exit"){
            return;
        }
    }
    while(true)
}

bankService(myBank)