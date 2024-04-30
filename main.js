#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "WHAT DO YOU LIKE TO ADD IN YOUR TODOS ?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "DO YOU WANT TO ADD MORE IN IT ?",
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
;
