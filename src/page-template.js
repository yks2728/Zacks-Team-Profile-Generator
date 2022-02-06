const teamGenerate = (team) => {
  const generateManager = (manager) => {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3>
            
            </div>
            <div class="card-body">
                <h3> Id: ${manager.getId()}</h3>
                <h3> Email: ${manager.getEmail()}</h3>
                <h3> Office Number: ${manager.getofficeNumber()}</h3>
            </div>
        </div>
            
        
     
        `;
  };
  const generateEngineer = (engineer) => {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <h3> Id: ${engineer.getId()}</h3>
                <h3> Email: ${engineer.getEmail()}</h3>
                <h3> Github: ${engineer.getGithub()}</h3>
            </div>
        </div>
        `;
  };
  const generateIntern = (intern) => {
    return `
        <div class="card">
            <div class="card-header">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>  
            </div>
            <div class="card-body">
                <h3> Id: ${intern.getId()}</h3>
                <h3> Email: ${intern.getEmail()}</h3>
                <h3> School: ${intern.getSchool()}</h3>
            </div>
        </div>
        `;
  };
  const cards = [];
  cards.push(
    team
      .filter((manager) => manager.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  cards.push(
    team
      .filter((engineer) => engineer.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  cards.push(
    team
      .filter((intern) => intern.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return cards.join("");
};

module.exports = (teamMembers) => {
  return `
    <!DOCTYPE html>
    <html lan="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Zacks Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <div class="container-fluid">
            <div class=“row”>
                <div class=“col-12 jumbotron mb-3 team-heading”>
                    <h1 class=“text-center”>My Team</h1>
                </div>
            </div>
        </div>
        <div class=“container”>
        <div class=“row”>
            <div class=“team-area col-12 d-flex justify-content-center”>
            ${teamGenerate(teamMembers)}
            </div>
        </div>
    </div>
    </body>
    </html>
    `;
};
