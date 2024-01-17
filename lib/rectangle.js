const Shape = require('./shape')

class Rectangle extends Shape{
    constructor(shapeColor,text, textColor){
        super(shapeColor,text, textColor);
    };
    render(){
        return  `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x=50 width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="100" font-size="25" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `
        
    }
}

module.exports = Rectangle;