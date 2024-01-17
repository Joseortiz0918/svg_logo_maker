//must have a triangle, square and a circle class in a parent of shape 

//use inheritance to reduce code  in the child classes 
class Shape{
    constructor(shapeColor,text, textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    render(){
        return(console.log(hello))
        
    }
}

module.exports = Shape;