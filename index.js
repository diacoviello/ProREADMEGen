const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//create my array of questions for the user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of the project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license for this project: ",
    choices: [
      {
        name: "Apache License 2.0",
        value:
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "MIT License",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg](https://opensource.org/licenses/MIT)",
      },
      {
        name: "BSD 3-Clause",
        value:
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg](https://opensource.org/licenses/BSD-3-Clause)",
      },
      {
        name: "Boost Software License 1.0",
        value:
          "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg](https://www.boost.org/LICENSE_1_0.txt)",
      },
      {
        name: "None",
        value: "",
      },
    ],
  },
  {
    type: "input",
    name: "usage",
    message: "Input any usage information here."
  },
  {
    type: "input",
    name: "contributing",
    message: "Input any contributing guidelines here."
  },
  {
    type: "input",
    name: "test",
    message: "Please enter any testing conditions here."
  }
];

//function to write the readMe file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//write the function to initialize the application
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("generating your ReadME");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

init();
