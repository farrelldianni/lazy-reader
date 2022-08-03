// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
//description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
      {
          name: "title",
          type: "input",
          message: `what is your apps title: `
      },
      {
        name: "name",
        type: "input",
        message: `name:`
      },
      {
        name: "email",
        type: "input",
        message: `email address:`
      },
      {
        name: "github",
        type: "input",
        message: `github username:`
      },
      {
        name: "description",
        input: "input",
        message: `describe the application:`
      },
      {
        name: "tech",
        type: "checkbox",
        choices: ["HTML", "CSS", "Bootstrap 4", "JavaScript", "jQuery", "React.js", "Node.js"],
        message: "what tech did you use to build this:"
      },
      {
        name: "installation",
        input: "input",
        message: `describe the installation process`
      },
      {
        name: "usage",
        type: "input",
        message: `what is the use case:`
      },
      {
        name: "contributing",
        type: "input",
        message: `project contribution guidelines:`
      },
      {
        name: "tests",
        type: "input",
        message: `testing instructions:`
      },
      {
        type: "checkbox",
        name: "license",
        message: "which license/license's will it use:",
        choices: ["MIT", "BSD", "Apache", "GPL", "ISC", "Public", "None"],
      },


];

const promptUser = () => {
  return inquirer.prompt(questions);
}
// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./output/readme.md', data, err => {
      if (err) {{
        reject(err);
        return;
      }
      resolve({
        ok:true,
        message: 'readme.md created',
      })
    }})
})
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then(questions => {
      return generateReadMe(questions);
    })
    .then(formattedPage =>{
      return writeToFile(formattedPage);
    })
    .then(writeFileResponse =>{
      console.log(writeFileResponse);
    })
    .catch(err => {
      console.log(err);
    })
}

// Function call to initialize app
init()
