const { Circle, Square, Triangle } = require('./shapes.js');

// Test Circle
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = 'blue'
        shape.setColor(color);
        expect(shape.render()).toEqual(``)
    })
})