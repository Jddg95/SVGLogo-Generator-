const fs = require('fs');
const inquirer = require('inquirer'); // Use require to import inquirer

// Import the questions from questions.js
const askLogoQuestions = require('./lib/questions');

// Define the classes for Triangle, Square, and Circle, or import them if necessary
class Triangle  extends Shape {
    render() {
        // return polygon with color input
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    } 
} // Define or render Triangle
class Square  extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
} // Define or import Square
class Circle  extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
} // Define or import Circle

// Function to generate an SVG file using user-provided answers from inquirer prompts
function generateSVGFile(fileName, answers) {
  let svgString = "";

  // Set the width and height of the SVG container
  svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  // Use the '<g>' tag to wrap the shape, ensuring that the user's font input appears on top of the polygon, not behind it
  svgString += "<g>";

  // Insert the user's choice of shape into the SVG string
  svgString += `${answers.shape}`;

  // Conditional check based on the user's shape choice to add polygon properties and shape color to the SVG string
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // Use the '<text>' tag to control text alignment, content, and text color based on user input, with a default font size of "40"
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  // Close the '<g>' tag
  svgString += "</g>";

  // Close the SVG container
  svgString += "</svg>";

  // Use the 'fs' module to create an SVG file, handling any errors or logging a success message
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Function that utilizes inquirer prompts to collect user input via the command line
function promptUser() {
  inquirer
    .prompt(askLogoQuestions)
    .then((answers) => {
      // Handle an error if the text input is longer than three characters
      if (answers.text.length > 3) {
        console.log("Please enter a value of three characters or less.");
        promptUser();
      } else {
        // Call the function to generate the SVG file
        generateSVGFile("logo.svg", answers);
      }
    });
}

// Initiate the promptUser function to start the inquirer prompts when the application is run
promptUser();