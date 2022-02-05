const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquire = require('inquirer');
const path = require('path');
const generatePage = require('./src/page-template.js');
const { writeFile } = require('./utils/generate-site.js');


const questions = () => {
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
            default: true
        },
        {
            type: 'confirm',
            name: 'addAnotherTeamMember',
            message: 'Would you like to add another team member (Required)',
            default: true
        },
        {
            type: 'list',
            name: 'Employee',
            message: 'Select another employee to add to the team (Required)',
            choices: ['Engineer', 'Intern']
        }
    ])

}