const { Circle, Square, Triangle } = require('../lib/shapes');

// Test Circle
describe('Shape', () => {
    describe('Circle', () => {
        it('should render a blue circle', () => {
            var color = `blue`;
            const shape = new Circle(color);
            expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="blue"/>`)
        });
    });
});

// Test Square
describe('Shape', () => {
    describe('Square', () => {
        it('should render a blue square', () => {
            var color = `blue`;
            const shape = new Square(color);
            expect(shape.render()).toEqual(`<square x="73" y="73" width="160" height="160" fill="blue"/>`)
        })
    })
});

// Test Triangle
describe('Shape', () => {
    describe('Triangle', () => {
        it('should render a blue triangle', () => {
            var color = `blue`;
            const shape = new Triangle(color);
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`)
        });
    });
});