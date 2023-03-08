
const generateEmployees = employees => {

    const generateManager = manager => {
        return `
        <section class="card">
            <div class="card-header has-background-link">
            <p class="card-header-title has-text-white is-size-3">${manager.getName()}<br>${manager.getRole()}</p>
        </div>
            <ul class="list-group list-group-flush">
              <li>ID: ${manager.getId()} </li>
              <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li>Office Number: ${manager.getOfficeNum()} </li>
            </ul>
        </section>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <section class="card">
            <div class="card-header has-background-link">
                <p class="card-header-title has-text-white is-size-3">${engineer.getName()}<br>${engineer.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li>ID: ${engineer.getId()} </li>
              <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li>GitHub: <a href=https://github.com/${engineer.getGithub()}>${engineer.getGithub()}</a></li>
            </ul>
        </section>
        `;
    };

    const generateIntern = intern => {
        return `
        <section class="card">
            <div class="card-header has-background-link">
                <p class="card-header-title has-text-white is-size-3">${intern.getName()}<br>${intern.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li>ID: ${intern.getId()} </li>
              <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li>School: ${intern.getSchool()} </li>
            </ul>
        </section>
        `;
    };

    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );

    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );

    return html.join("");
}

module.exports = (team) => {
    return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 p-5 mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                      ${generateEmployees(team)}
                  </div>
              </div>
          </div>
      </body>
      
      </html>`}