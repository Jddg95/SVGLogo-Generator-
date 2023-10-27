// Import Inquirer 
const inquirer = require('inquirer');

// File system module 
const fs = require('fs');

const { Triangle, Sqyare, Circle } = require("./lib/shapes")


// Inquierer to prompt the user for input
inquirer.prompt(questions).then((answers) => {
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



