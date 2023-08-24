const { Circle, Square, Triangle } = require('./shapes.js');
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');

// User Input Questions
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color, or hexadecimal number, for the color of the shape?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter 3 letters for the initials on the logo.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color, or hexadecimal number, for the initials'
    }
];

// Collect input and write to a new SVG file
function createFile() { 
    let userShape = '';
    inquirer
        .prompt(questions)

        .then(( answers ) => {
            console.log(answers)
        if (answers.shape === 'Circle') {
           const circle = new Circle(answers.shapeColor)
            userShape = circle.render()
        } 
        else if (answers.shape === 'Square') {
            const square = new Square(answers.shapeColor)
            userShape = square.render()
        }
        else if (answers.shape === 'Triangle') {
            const triangle = new Triangle(answers.shapeColor)
            userShape = triangle.render()
        }

            return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
${userShape}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
    `
        })
    
    .then(newSVG => {
        writeFile(`logo.svg`, newSVG, (err) => {
                err? console.error(err) : console.log('Successfully generated logo.svg')
            })
    });

};


module.exports = { createFile };
