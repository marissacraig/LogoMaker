const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createFile } = require('./file');
const { join } = require('path');

class SVG {
    constructor() {
        
    }
    run() {
        return inquirer
            .prompt([
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
            ])
            .then(({ answers }) => {
                return createFile(answers);
                
            })
            .then(( newSVG ) => {
                return writeFile(`${answers.text}.svg`, newSVG)
                
            })
    } 
    }





module.exports = SVG;