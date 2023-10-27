// Example test for shapes.js
const { Triangle, Square, Circle } = require('../shapes');

test('Triangle render() function', () => {
  const triangle = new Triangle('red');
  const rendered = triangle.render();
  expect(rendered).toContain('<polygon');
  expect(rendered).toContain('fill="red"');
});