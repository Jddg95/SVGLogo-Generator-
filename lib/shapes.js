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
  