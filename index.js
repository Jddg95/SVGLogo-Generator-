const inquirer = require('inquirer');
const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

// Defining the questions for the user input 
const logoQuestions = [
    {
        type: 'input',
        name: 'text',
        messages: 'Enter up tp three characters for the text:',
    },
    {
        type:'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hex #',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        chouces: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
    }
];

// Inquierer to prompt the user for input
inquierer.prompt(logoQuestions).then((answers) => {
    const {text, textColor, shape, shapeColor} = answers;
}) 



