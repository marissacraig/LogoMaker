const { Circle, Square, Triangle } = require('./shapes');


function createFile(answers) {
    answers.shape = shape;
    answers.text = text;
    answers.shapeColor = shapeColor;
    answers.textColor = textColor;
    
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
${shape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>
    `
}


module.exports = { createFile };