const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const promptUser = () => {
    return Inquirer.prompt([
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
            type: 'list',
            name: 'addTeamMember',
            message: 'Would you like to add another team member? (Required)',
            choices: ['Yes', 'No']
        }
    ])
}