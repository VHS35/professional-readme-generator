
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateMarkdown(data) {
  let generateBadge = "";
  let generateLink = "";
  let generateSection = "";

  if(data.license === "MIT") {
    generateBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    generateLink = '(https://opensource.org/licenses/MIT)';
    generateSection = '## Licensed by MIT;';
  } else if (data.license === "IBM") {
    generateBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
    generateLink = '(https://opensource.org/licenses/IPL-1.0)';
    generateSection = 'Licensed by IBM';
  } else if (data.license === "Mozilla") {
    generateBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
    generateLink = '(https://opensource.org/licenses/MPL-2.0)';
    generateSection = '## Licensed by Mozilla';
  } else if (data.license === "No license") {
    generateBadge = '';
    generateLink = '';
    generateSection = '';
  };

  // TODO: Create a function to generate markdown for README
  return `# ${data.title}
  ${generateSection}
  ${generateBadge}${generateLink}


  # Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests] (#test)
  * [Contribution](#contribution)
  * [Contact] (#email)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Tests
  ${data.test}
  
  ## Contribution 
  ${data.contribution}
  
  ## Contact
  I can be reached by email ${data.email} or feel free to follow me on GitHub: [${data.username}](https://github.com/${data.username})
  
  `;
  }
  
  module.exports = generateMarkdown;