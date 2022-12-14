// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function writeToFile(readmeInput, data) {
  fs.writeFileSync('README.md', readmeInput)
}


   inquirer
   const questions = () =>{
   return inquirer.prompt([ {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How was the project tested?',
      },

    {
      type: 'list',
      message: 'What is your project license?',
      name: 'license',
      choices: ['MIT', 'IBM', 'MOZILLA', 'No License'],
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
])
.then((data) => {
  const readmeInput = generateMarkdown(data)
  writeToFile(readmeInput, data)
  fs.writeFileSync('README.md', readmeInput)
    console.log('Successfuly created README')
})
};




// TODO: Create a function to initialize app
const init = () => {
  questions()
};

// Function call to initialize app
init();
