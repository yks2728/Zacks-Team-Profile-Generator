const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquire = require('inquirer');
const path = require('path');
const generatePage = require('./src/page-template.js');
const { writeFile } = require('./utils/generate-site.js');
const teamMembers = [];


const addManager  = () => {
    return inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Managers Name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Managers name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the managers employee id (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the managers employee id!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the managers email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the managers email!');
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter the managers office number (Required)',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the managers office number!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add this team member? (Required)',
            default: false
        }
    ]);
};

addManager()
    .then(data => {
        console.log(data)
    })

const addEngineer = () => {
    return inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Engineers name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Enter the Engineers name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Engineers Id (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please Enter the Engineers Id!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Engineers Email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please Enter the Engineers Email!');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the Engineers Github Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please Enter the Engineers Github Username!');
                }
            }
        },
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add this team member?',
            default: false
        }
    ]);
};

addEngineer()
    .then(data => {
        console.log(data)
    })


const addIntern = () => {
    return inquire.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Interns Name (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Interns Id (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns id!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Interns email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please Enter the Interns email!');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the Interns School (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please Enter the Interns School!');
                }
            }
        },
        {
            type: 'confirm',
            name: 'addTeamMember',
            message: 'Would you like to add this team member?',
            default: false
        }
    ]);
};


addIntern()
    .then(data => {
        console.log(data)
    })







