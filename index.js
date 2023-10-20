const inquirer = require('inquirer');
const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

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
        chouces: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
    }
];

// Inquierer to prompt the user for input
inquierer.prompt(questions).then((answers) => {
    const {text, textColor, shape, shapeColor} = answers;

    const svg = xmlbuilder.create('svg');
    svg.att('width', '300');
    svg.att('height', '200');

    //create shape element 
    const shapeElement = svg.ele(shape);
    shapeElement.att(fill, shapeColor);

    // text for the sahape 
    const textElement = shapeElement.ele('text', {x: '50%', y: '50%', 'text-anchor': 'middle', dy: '0.35em'});
    textElement.att('fill', textColor);
    textElement.text(text);

    // convert svg content to string 
    const svgString = svg.end({ pretty: true });

    //writting the svg content to a file named "logo.svg"
    fs.writeFileSync('logo.svg', svgString);

    //Print the generated logo to the command line
    console.log(svgString);
}); 



