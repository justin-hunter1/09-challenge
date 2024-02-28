// import packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const gmd = require('./generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
    },
    {
        type: 'input',
        message: "If applicable, how do you install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "If applicable, provide instructions on how to use your project.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, who did you get idea's or assistance from in creating this project.",
        name: 'credit'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Apache License 2.0', 'GNU GPL 3', 'MIT License', 'BSD 2 Simple', 'BSD 3 New'],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("creating file!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            let rmd = gmd(answers);
            writeToFile(`${answers.title}.md`, rmd);
    });

}
    

// Function call to initialize app
init();
