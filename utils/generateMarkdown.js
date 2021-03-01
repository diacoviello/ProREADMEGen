//create a function that returns a license badge based on user pick of license..if none, return something

//create a function that returns the license link based on user pick...if non return something

//create a function that returns the license section of the readme..if there is none return something

function generateMarkdown(data) {
  return `

  <h1>${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-lightblue)

    ##Github user
    ${data.github}

    ##Github Email
    ${data.email}
    
    ##Description
    ${data.description}

    ##Installation Process
    ${data.installation}
    
    ##User License
    ${data.license}
    
    ##Usage
    ${data.usage}

    ##Contributions
    ${data.contributing}

    ##Testing
    ${data.test}
    `;
}

module.exports = generateMarkdown;
