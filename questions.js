// Defining the questions for the user input 
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up tp three characters for the text:',
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
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
    },
];