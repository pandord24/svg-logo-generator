const SVG = require("../lib/svg");

const {Square } = require("../lib/shapes");
const exp = require("constants");

describe("SVG", () => {
    test("should render a 300x200 svg element", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
        const svg = new SVG();
        const actualSVG = svg.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
    
    test("should append text element", () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">A</text></svg>`;
        const svg = new SVG();
        svg.setText("A", "red")
        expect(svg.render()).toEqual(expectedSVG);
})

test("should set text message and color", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>`;
    const svg = new SVG();
    svg.setText("SVG", "#333")
    expect(svg.render()).toEqual(expectedSVG);
})

test("should include a shape", () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`;
    const svg = new SVG ();
    svg.setText("SVG", "red")
    const square = new Square();
    square.setColor("yellow");
    svg.setShape(square);
    const actualResult = svg.render();


    expect(actualResult).toEqual(expectedSVG);
})

})