// Import the Triangle class from shapes.js
const { Triangle } = require('./shapes.js');

// Test the Triangle class render() function
describe('Triangle class render() function', () => {
  it('should render a polygon element', () => {
    // Create a Triangle instance with a red color
    const triangle = new Triangle('red');
    // Get the rendered SVG string
    const rendered = triangle.render();
    // Check if the rendered string contains a '<polygon' element
    expect(rendered).toContain('<polygon');
  });

  it('should set the fill color to "red"', () => {
    // Create a Triangle instance with a red color
    const triangle = new Triangle('red');
    // Get the rendered SVG string
    const rendered = triangle.render();
    // Check if the rendered string contains 'fill="red"'
    expect(rendered).toContain('fill="red"');
  });

  // Import the Circle class from shapes.js
const { Circle } = require('./shapes.js');

// Test the Circle class render() function
describe('Circle class render() function', () => {
  it('should render a circle element', () => {
    // Create a Circle instance with a blue color
    const circle = new Circle('blue');
    // Get the rendered SVG string
    const rendered = circle.render();
    // Check if the rendered string contains a '<circle' element
    expect(rendered).toContain('<circle');
  });

  it('should set the fill color to "blue"', () => {
    // Create a Circle instance with a blue color
    const circle = new Circle('blue');
    // Get the rendered SVG string
    const rendered = circle.render();
    // Check if the rendered string contains 'fill="blue"'
    expect(rendered).toContain('fill="blue"');
  });

  // Import the Square class from shapes.js
const { Square } = require('./shapes.js');

// Test the Square class render() function
describe('Square class render() function', () => {
  it('should render a rect element', () => {
    // Create a Square instance with a green color
    const square = new Square('green');
    // Get the rendered SVG string
    const rendered = square.render();
    // Check if the rendered string contains a '<rect' element
    expect(rendered).toContain('<rect');
  });

  it('should set the fill color to "green"', () => {
    // Create a Square instance with a green color
    const square = new Square('green');
    // Get the rendered SVG string
    const rendered = square.render();
    // Check if the rendered string contains 'fill="green"'
    expect(rendered).toContain('fill="green"');
  });
});
});
});


