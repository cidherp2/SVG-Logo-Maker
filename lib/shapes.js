
class Shapes  {
    constructor (fill,text,textColor){
        this.fill = fill;
        this.text = text;
        this.textColor = textColor;
    }

    writeText() {
        return `<text x="50%" y="50%" stroke-width="2px" font-size="60" text-anchor="middle" fill="${this.textColor}" >${this.text}</text>`
    
}
}

class Rectangle extends Shapes {
    constructor(fill,height,width,text,textColor){
        super(fill,text,textColor);
        this.height = height;
        this.width = width;
    }

    renderRectangle(){
        return ` <svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="${this.width}" height="${this.height}" fill ="${this.fill}"/>
      
        ${super.writeText()}
      
      </svg>`
    }
}

  class Circle extends Shapes{

    constructor(fill,text,textColor,radius){
        super(fill,text,textColor);
        this.radius = radius;
    }
    renderCircle() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="${this.radius}" fill="${this.fill}"/>
  ${super.writeText()}
</svg>`
    }
  }

  module.exports = {
    Rectangle,
    Circle
  };

  //class Triangle extends Shapes{
    //constructor()
 //}