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
                    choices: ['circle', 'square', 'triangle']
                },
                {
                    type: 'list',
                    name: 'shapeColor',
                    message: 'What color would you like the shape to be?',
                    choices: ['black', 'blue', 'red', 'green', 'yellow', 'white']
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter 3 letters for the initials on the logo.'
                },
                {
                    type: 'list',
                    name: 'textColor',
                    message: 'What color would you like the initials to be? -- Color can not be the same as shape color',
                    choices: ['black', 'blue', 'red', 'green', 'yellow', 'white']
                }
            ])
            .then(({ answers }) => {
                return createFile(answers);
            })
            .then(() => {
                return writeFile(
                    
                )
            })
    }
    }





module.exports = SVG;