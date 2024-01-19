// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [{
    type: "input",
    name: "title",
    message: "What is the name of your project? (Required)",
    validate: function (input) {
        if (input.trim() === "") {
            return "Must enter a project name!";
        }
        return true;
    }
}, {
    type: "input",
    name: "description",
    message: "Give a short description of your project.(Required)",
    validate: function (input) {
        if (input.trim() === "") {
            return "Must enter a porject description!";
        }
        return true;
    }
}, {
    type: "input",
    name: "install",
    message: "What are the required steps to install your project?",
},
{
    type: "input",
    name: "issues",
    message: "Where should issues be reported? (Required)",
    validate: function (input) {
        if (input.trim() === "") {
            return "Must enter a installation";
        }
        return true;
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)
    //write the file
    fs.writeFile(fileName, content, data, (err) => {
        if (err) throw err;
    });
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);

    writeToFile('./output/readme.md', answers);

}

// Function call to initialize app
init();
