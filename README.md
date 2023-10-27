<div align="center">
  
  # SVG Logo Maker

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en) 
  [![Jest Badge](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat)](https://jestjs.io/)
  
</div>

## Description

Generate an SVG logo with your choice of shape (circle, square, or triangle), shape color, text (limit of 3 characters), and text color. Shape and text colors can be chosen using color keywords or hexadecimal numbers.

Watch a [video](https://drive.google.com/file/d/1A2VQhiCqFQlFh11n5yiMDAyEuMMRMyon/view?usp=sharing) demonstration of the basic functionality:

[SVG Logo Maker Demo](https://user-images.githubusercontent.com/116515976/230991714-bffc14be-c289-4ec2-b1bc-3bfb1ae13cfe.mov)

## How It Works

This command-line application provides an intuitive interface for creating custom SVG logos. Here's a breakdown of the app's functionality:

- **Text Input**: The application prompts you to enter the text for your logo. You can input up to three characters.

- **Text Color**: You'll be prompted to specify the color of the text. Enter a color keyword or a hexadecimal color code to set the desired text color.

- **Shape Selection**: The app presents you with a choice of shapes: circle, triangle, and square. Select the shape you want for your logo.

- **Shape Color**: You are prompted to define the color of the selected shape. Just like the text color, you can use color keywords or hexadecimal color codes.

- **Prompt Completion**: After providing input for all the prompts, the application generates an SVG file named `logo.svg` containing your customized logo.

- **Success Message**: Upon successful logo generation, the application displays the message "Generated logo.svg" in the command line.

- **Preview**: Open the generated `logo.svg` file in a browser, and you'll see a 300x200 pixel image that perfectly matches your input criteria.

Your experience with this application will be smooth and efficient, allowing you to create unique SVG logos tailored to your needs effortlessly.


## Table of Contents

- [SVG Logo Maker](#svg-logo-maker)
  - [Description](#description)
  - [How It Works](#how-it-works)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [LICENSE](#license)
  - [TESTS](#tests)
  - [Contact](#contact)
## Installation

To get started with the SVG Logo Maker, please follow these steps:

**1. Node.js Installation:**

- Make sure you have Node.js installed on your computer. If you don't have Node.js, you can download and install it from the official [Node.js website](https://nodejs.org/en).

**2. Clone the Repository:**

- Clone this project repository to your local machine using your preferred Git client or by running the following command in your terminal:

  ```sh
  git clone <https://github.com/Jddg95/SVGLogo-Generator-.git>

**3. Install Dependencies:**

- Open your terminal and navigate to the project's root directory. Use the following command to install the necessary project dependencies: 

    ```sh
    npm install

-This will download and isntall all the required libraries and tools.

**4. Install Jest (For Testing):**

- The application uses Jest for testing. If Hest is not already installed, you can add it as a development dependancy with the following command:

    ```sh
    npm install --save-dev jest

- You are now ready to run the SVG Logo Maker and start creating your custom SVG logos.
- Make sure to refer to the Usage section for instructions on how to use the application.

## Usage 

**1. Run the application by tapping the following command:** 
    
    ```sh
    node index.js

You will be asked a series of questions to customize your logo.

**2. Answer the following prompts:** 

- Enter up to three characters for the text.
- Enter a color keyword or a hexadecimal number for the text color.
- Choose a shape from the list: circle, triangle, or square.
- Enter a color keyword or a hexadecimal number for the shape's color.

**3. If you entered the valid input for all prompts, an SVG file named `logo.svg` will be generated.  You will see the message "Generated logo.svg" printed in the command line.**

**4.Open the logo.svg file in a web browser to view your customized logo, which will be a 300x200 pixel image that matches your criteria.**

## LICENSE 

[MIT License](https://opensource.org/licenses/MIT)

## TESTS


- Each shape class (Circle, Square, and Triangle) is tested for a render() method that returns a string for the corresponding SVG file matching color and text requests. To run the tests using Jest, type the following command:

    ```sh
    npm test 

## Contact 

- Email: jddgarcia95@gmail.com
- -LinkedIn: []
- Portfolio: []
- Github: http://github.com/jddg95