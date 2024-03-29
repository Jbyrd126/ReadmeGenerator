// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  const badges = [];

  licenses.forEach((license) => {
    if (license == "APACHE 2.0") {
      badges.push(
        `![Static Badge](https://img.shields.io/badge/license-Apache2.0-brightgreen.svg)`
      );
    }
    if (license == "MIT") {
      badges.push(
        `![Static Badge](https://img.shields.io/badge/license-mit-brightgreen.svg)`
      );
    }
    if (license == "GPL 3.0") {
      badges.push(
        `![Static Badge](https://img.shields.io/badge/license-GPL3.0-brightgreen.svg)`
      );
    }
    if (license == "BSD 3") {
      badges.push(
        `![Static Badge](https://img.shields.io/badge/license-BSD3-brightgreen.svg)`
      );
    }
    if (license == "None") {
      return ``;
    }
  });
  return badges.join("\n \n ");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  const links = [];
  console.log(licenses);

  licenses.forEach((license) => {
    if (license == "APACHE 2.0") {
      links.push(`https://www.apache.org/licenses/LICENSE-2.0`);
    }
    if (license == "MIT") {
      links.push(`https://opensource.org/license/mit/`);
    }
    if (license == "GPL 3.0") {
      links.push(`https://www.gnu.org/licenses/gpl-3.0.en.html`);
    }
    if (license == "BSD 3") {
      links.push(`https://opensource.org/license/bsd-3-clause/`);
    }
    if (license == "None") {
      return ``;
    }
  });
  return links.join(" \n \n");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License 
 This app is licensed by ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, install, issues, license, email, github, usage, contributing, tests } = data;
  const badges = data.license;

  return `# ${data.title}

  


  

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contacts](#contacts)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

* [Issues](#issues)


## Installation

${data.install}

## Usage

${data.usage}


${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}


## Contacts

Email: ${data.email} 

Github: ${data.github}


## Contributing

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Questions

If you have any questions about the application, please email me at ${data.email}!

## Issues

For any is issues please visit my Github repo ${data.issues}


`;
}

module.exports = generateMarkdown;
