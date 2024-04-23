const inquirer = require('inquirer');
const SVG = require('./svg');
const { Square, Triangle, Circle } = require('./shapes');
const { writeFile } = require('fs/promises');


class CLI {
    run() {
        const questions = [
            {
                name: "text",
                type: "input",
                message: "Enter Text for the logo (Must not be more that 3 character):",
                validate: (text) => {
                    return text.length <= 3 || "The message must not exceed 3 character";
                }
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter a text color:",
            },
            {
                name: "shapeType",
                type: "list",
                choices: ["circle", "triangle", "square"],
               
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a shape color:"
            }
        ]
        return inquirer.prompt(questions).then(({text, textColor, shapeType, shapeColor}) => {
            let shape;
            if(shapeType === "circle") {
                shape = new Circle();
            } else if(shapeType === "square") {
                shape = new Square();
            } else if(shapeType === "triangle") {
                shape = new Triangle();
            }

            shape.setColor(shapeColor);
            
            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);
            return writeFile(`./examples/${text}.svg`, svg.render())

        }).then(() => {
            console.log("SVG file created successfully")
        }).catch((error) => {
            console.error("An error occurred: ", error)
        });
    }
}

module.exports = CLI;