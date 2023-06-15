const fs = require('fs');
const inquirer = require('inquirer');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choosing a license:',
    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL)', 'Creative Commons Zero (CC0)', 'Mozilla Public License 2.0']
  }, // Added a comma here
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to generate the README content
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully generated ${fileName}`);
    }
  });
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const readmeContent = generateMarkdown(data);
      writeToFile('disp/README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the function to initialize the app
init();