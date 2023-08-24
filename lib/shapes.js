// Shapes class that extends to each shape
class Shapes {
    constructor(color) {
        this.color = color;
    
    }
}

class Circle extends Shapes{
    constructor(color) {
        super(color)   
    }
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {
       return `<square x="73" y="73" width="160" height="160" fill="${this.color}"/>`
    }
}

class Triangle extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

module.exports = { Circle, Square, Triangle };