// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  const badges = [];

  licenses.forEach(license => {
    if (license == "APACHE 2.0") {
      badges.push(`![Static Badge](https://img.shields.io/badge/license-Apache2.0-brightgreen.svg)`)

    }
    if (license == "MIT") {
      badges.push(`![Static Badge](https://img.shields.io/badge/license-mit-brightgreen.svg)`)

    }
    if (license == "GPL 3.0") {
      badges.push(`![Static Badge](https://img.shields.io/badge/license-GPL3.0-brightgreen.svg)`)

    }
    if (license == "BSD 3") {
      badges.push(`![Static Badge](https://img.shields.io/badge/license-BSD3-brightgreen.svg)`)

    }
    if (license == "None") {
      return ``
    }

  });
  return badges.join('\n \n ');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  const links = [];
  console.log(licenses);

  licenses.forEach(license => {

    if (license == "APACHE 2.0") {
      links.push(`https://www.apache.org/licenses/LICENSE-2.0`)

    }
    if (license == "MIT") {
      links.push(`https://opensource.org/license/mit/`)

    }
    if (license == "GPL 3.0") {
      links.push(`https://www.gnu.org/licenses/gpl-3.0.en.html`)

    }
    if (license == "BSD 3") {
      links.push(`https://opensource.org/license/bsd-3-clause/`)

    }
    if (license == "None") {
      return ``
    }

  })
  return links.join(' \n \n');
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `## License 
 This app is licensed by ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badges = data.license
  console.log(badges);
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  

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

${renderLicenseLink(data.license)}


## Contacts

${data.email} 

${data.github}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.





## Contributing

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
${data.tests}
Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

email: ${data.email}

github: [visit my Github](https://www.github.com/${data.github})

## Issues

${data.issues}


`;
}

module.exports = generateMarkdown;
