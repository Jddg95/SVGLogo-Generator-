class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Triangle,
    Square,
    Circle,
  };
  

//   // Define the classes for Triangle, Square, and Circle, or import them if necessary
// class Triangle extends Shape{
//     render() {
//         // return polygon with color input
//         return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
//     } 
// } // Define or render Triangle
// class Square extends Shape{
//     render() {
//         return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
//     }
// } // Define or import Square
// class Circle extends Shape{
//     render() {
//         return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
//     }
// } // Define or import Circle
