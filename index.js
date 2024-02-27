// import packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const gmd = require('./generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: '',
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: '',
    },
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
        message: "If applicable, describe the steps required to install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "If applicable, provide instructions on how to use your project.",
        name: 'usage'
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
    console.log("creating file!")
}

// TODO: Create a function to initialize app
function init() {
    .then {
        const answers = inquirer.prompt(questions);
    let rmd = gmd(answers);
    writeToFile(`${answers.title}.md`,rmd);
    }
    catch (err) {

    }

}

// Function call to initialize app
init();
