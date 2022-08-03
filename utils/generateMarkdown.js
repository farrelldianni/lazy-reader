// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `[GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return"" //for empty string
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return "" //for empty string
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      This project was developed under the ${license} license.`
    )
  }
  return ""//for empty string
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #  Project Title
     ${data.title}
    
  ##  Description
    ${data.description}
  
  ## Technologies
  ${data.tech.join(", ")}
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions  
  See my Github [GitHub](https://www.github.com/${data.github})  
  Email me  <${data.email}>

`;
}

module.exports = generateMarkdown;
