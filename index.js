const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquire = require("inquirer");
const path = require("path");
const generatePage = require("./src/page-template.js");
const { writeFile } = require("./utils/generate-site.js");
const teamMembers = [];

// add manager prompts
const addManager = () => {
  return (
    inquire
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the Managers Name (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Managers name!");
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the managers employee id (Required)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the managers employee id!");
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the managers email (Required)",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter the managers email!");
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Enter the managers office number (Required)",
          validate: (officeInput) => {
            if (officeInput) {
              return true;
            } else {
              console.log("Please enter the managers office number!");
            }
          },
        },
        {
          type: "confirm",
          name: "addTeamMember",
          message: "Would you like to add this team member? (Required)",
          default: false,
        },
      ])
      // manager object
      .then((managerData) => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);
        createTeam();
      })
  );
};

// add engineer prompts
const addEngineer = () => {
  return (
    inquire
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the Engineers name (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please Enter the Engineers name!");
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the Engineers Id (Required)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please Enter the Engineers Id!");
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the Engineers Email (Required)",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please Enter the Engineers Email!");
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "Enter the Engineers Github Username (Required)",
          validate: (githubInput) => {
            if (githubInput) {
              return true;
            } else {
              console.log("Please Enter the Engineers Github Username!");
            }
          },
        },
        {
          type: "confirm",
          name: "addTeamMember",
          message: "Would you like to add this team member",
          default: false,
        },
      ])
      // engineer object
      .then((engineerData) => {
        const { name, id, email, github } = engineerData;
        const engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
        createTeam();
      })
  );
};

// add intern prompts
const addIntern = () => {
  return (
    inquire
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the Interns Name (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Interns name!");
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the Interns Id (Required)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the Interns id!");
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the Interns email (Required)",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please Enter the Interns email!");
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "Enter the Interns School (Required)",
          validate: (schoolInput) => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Please Enter the Interns School!");
            }
          },
        },
        {
          type: "confirm",
          name: "addTeamMember",
          message: "Would you like to add this team member?",
          default: false,
        },
      ])
      // intern object
      .then((internData) => {
        const { name, id, email, school } = internData;
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);
        createTeam();
        console.log(teamMembers);
      })
  );
};

function createTeam() {
  inquire.prompt ([
    {
      type: 'list',
      name: 'members',
      message: 'Would you like to add another team member',
      choices: ['Engineer', 'Intern', 'None']
    }
  ])
  .then((teamMembersData) => {
    switch (teamMembersData.members) {
      case 'Engineer':
        addEngineer();
        break;
      case 'Intern':
        addIntern();
        break;
      default:
        writeFile(generatePage(teamMembers))
    }
  })
}

addManager()