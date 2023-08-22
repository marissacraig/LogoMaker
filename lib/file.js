const Text = require('./text.js');
const Shape = require('./shapes.js');
const Color = require('./colors.js');

function createFile(answers) {
    answers.shape = Shape;
    answers.text = Text;
    answers.shapeColor = Color.shapeColor;
    answers.textColor = Color.textColor;


    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <${Shape} fill="${Color.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${Color.textColor}">${Text}</text>

</svg>
    `;
}

module.exports = { createFile };