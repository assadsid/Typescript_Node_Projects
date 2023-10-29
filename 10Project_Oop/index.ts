#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { listenerCount } from "process";

const waitFunc = () => {
    return new Promise( (resolve) => {
        setTimeout(resolve, 3000)
    })
}
async function welcomTitle() {
    let mainWelcomeTitle = chalkAnimation.rainbow("****Welcome to Khana Peena App created by Assad Sid****");
    await waitFunc()
    mainWelcomeTitle.stop();
}

await welcomTitle()

let customerMenu: string[] = [];

async function askName1() {
    const nameInput = await inquirer.prompt({
        type: "input",
        name: "askname",
        message: "Your Name Please: "
    })
    if(nameInput.askname){
        console.log(chalk.bold.greenBright(`Hello ${nameInput.askname}, What would you like to have from our menu?`))
        return menuBar()
    }
};    
askName1()

async function menuBar() {
    const menuInput = await inquirer.prompt({
        type: "list",
        name: "askMenu",
        choices: ["Burgers", "Wraps", "Pizza", "Sandwiches", "No Order"],
        message: chalk.bold.yellowBright("Please select your meal")
    });
    if(menuInput.askMenu == "Burgers") {
        burgersMenu()
    }
    else if(menuInput.askMenu == "Wraps") {
        wrapsMenu()
    }
    else if(menuInput.askMenu == "Pizza") {
        pizzaMenu()
    }
    else if(menuInput.askMenu == "Sandwiches") {
        sandwichesMenu()
    } else if(menuInput.askMenu == "No Order") {
        console.clear()
        console.log(chalk.bold.yellowBright("***Thank you for using Khana Peena App***"))
    }
};    

async function burgersMenu() {
    const burgerItems = await inquirer.prompt({
        type: "list",
        name: "askBurger",
        choices: ["Zinger Burger", "Beef Burger", "Chicken Cheese Burger", "Dynamite Burger"],
        message: chalk.bold.yellowBright("Which Burger you want to eat?")
    })
    customerMenu.push(burgerItems.askBurger)
    
    console.clear()
    if(customerMenu.length > 0) {
        console.log(chalk.bold.blueBright("Your Meal List!"))
        customerMenu.map((allmenu) => {
            let menuIndexNum = customerMenu.indexOf(allmenu) + 1;
            console.log(chalk.bold.greenBright(`Meal no. ${menuIndexNum} - ${allmenu} has been added to cart`));
        })
    } else {
        console.log(chalk.bold.redBright("No Meal Selected!"))
    }
    reorderApp()
    
    async function reorderApp() {
        const order = await inquirer.prompt({
            type: "list",
            name: "askOrder",
            choices: ["Yes", "No"],
            message: chalk.bold.magentaBright("Do you want to Order something?")
        })
        if(order.askOrder == "Yes") {
            menuBar()
        } else if(order.askOrder == "No") {
            console.clear();
            console.log(chalk.bold.yellowBright(`***Your Order will be ready in a Short, Enjoy your Meal from Khana Peena App***\n`))
            console.log(chalk.bold.blueBright("Your Meal List!"))
            customerMenu.map((allmenu) => {
                let menuIndexNum = customerMenu.indexOf(allmenu) + 1;
                console.log(chalk.bold.greenBright(`Meal ${menuIndexNum}: ${allmenu}`));
            })
            console.log(chalk.bold.green("**************************"))
        }
    }
};

async function wrapsMenu() {
    const wrapItems = await inquirer.prompt({
        type: "list",
        name: "askWrap",
        choices: ["Chicken Wrap", "Veggie Wrap", "Fish Wrap", "Steak Wrap"],
        message: "Which Wrap you want to eat?"
    })
    customerMenu.push(wrapItems.askWrap)
    
    console.clear()
    if(customerMenu.length > 0) {
        console.log(chalk.bold.blueBright("Your Meal List!"))
        customerMenu.map((allmenu) => {
            let menuIndexNum = customerMenu.indexOf(allmenu) + 1;
            console.log(chalk.bold.greenBright(`Meal no. ${menuIndexNum} - ${allmenu} has been added to cart`));
        })
    } else {
        console.log(chalk.bold.redBright("No Meal Selected!"))
    }
    reorderApp()
    
    async function reorderApp() {
        const order = await inquirer.prompt({
            type: "list",
            name: "askOrder",
            choices: ["Yes", "No"],
            message: chalk.bold.magentaBright("Do you want to Order something?")
        })
        if(order.askOrder == "Yes") {
            menuBar()
        } else if(order.askOrder == "No") {
            console.clear();
            console.log(chalk.bold.yellowBright(`***Your Order will be ready in a Short, Enjoy your Meal from Khana Peena App***\n`))
            console.log(chalk.bold.blueBright("Your Meal List!"))
            customerMenu.map((allmenu) => {
                let menuIndexNum = customerMenu.indexOf(allmenu) + 1;
                console.log(chalk.bold.greenBright(`Meal ${menuIndexNum}: ${allmenu}`));
            })
            console.log(chalk.bold.green("**************************"))
        }
    }
};

async function pizzaMenu() {
    const pizzaItems = await inquirer.prompt({
        type: "list",
        name: "askPizza",
        choices: ["Supremo Pizza", "Arabian Delight Pizza", "Chicken Fajita Pizza", "Pepperoni Lovers Pizza"],
        message: "Which Pizza you want to eat?"
    })
    customerMenu.push(pizzaItems.askPizza)
    
    console.clear()
    if(customerMenu.length > 0) {
        console.log(chalk.bold.blueBright("Your Meal List!"))
        customerMenu.map((allmenu) => {
            let menuIndexNum = customerMenu.indexOf(allmenu) + 1;
            console.log(chalk.bold.greenBright(`Meal no. ${menuIndexNum} - ${allmenu} has been added to cart`));
        })
    } else {
        console.log(chalk.bold.redBright("No Meal Selected!"))
    }
    reorderApp()
    
    async function reorderApp() {
        const order = await inquirer.prompt({
            type: "list",
            name: "askOrder",
            choices: ["Yes", "No"],
            message: chalk.bold.magentaBright("Do you want to Order something?")
        })
        if(order.askOrder == "Yes") {
            menuBar()
        } else if(order.askOrder == "No") {
            console.clear();
            console.log(chalk.bold.yellowBright(`***Your Order will be ready in a Short, Enjoy your Meal from Khana Peena App***\n`))
            console.log(chalk.bold.blueBright("Your Meal List!"))
            customerMenu.map((allmenu) => {
                let menuIndexNum = customerMenu.indexOf(allmenu) + 1;
                console.log(chalk.bold.greenBright(`Meal ${menuIndexNum}: ${allmenu}`));
            })
            console.log(chalk.bold.green("**************************"))
        }
    }
};

async function sandwichesMenu() {
    const sandwichesItems = await inquirer.prompt({
        type: "list",
        name: "askSandwich",
        choices: ["Chicken Sandwich", "Club Sandwich", "BBQ Club Sandwich", "Grilled Sandwich"],
        message: "Which Sandwich you want to eat?"
    })
    customerMenu.push(sandwichesItems.askSandwich)
    
    console.clear()
    if(customerMenu.length > 0) {
        console.log(chalk.bold.blueBright("Your Meal List!"))
        customerMenu.map((allmenu) => {
            let menuIndexNum = customerMenu.indexOf(allmenu) + 1;
            console.log(chalk.bold.greenBright(`Meal no. ${menuIndexNum} - ${allmenu} has been added to cart`));
        })
    } else {
        console.log(chalk.bold.redBright("No Meal Selected!"))
    }
    reorderApp()
    
    async function reorderApp() {
        const order = await inquirer.prompt({
            type: "list",
            name: "askOrder",
            choices: ["Yes", "No"],
            message: chalk.bold.magentaBright("Do you want to Order something?")
        })
        if(order.askOrder == "Yes") {
            menuBar()
        } else if(order.askOrder == "No") {
            console.clear();
            console.log(chalk.bold.yellowBright(`***Your Order will be ready in a Short, Enjoy your Meal from Khana Peena App***\n`))
            console.log(chalk.bold.blueBright("Your Meal List!"))
            customerMenu.map((allmenu) => {
                let menuIndexNum = customerMenu.indexOf(allmenu) + 1;
                console.log(chalk.bold.greenBright(`Meal ${menuIndexNum}: ${allmenu}`));
            })
            console.log(chalk.bold.green("**************************"))
        }
    }
};
