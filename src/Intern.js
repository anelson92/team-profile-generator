const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, role, id, email, school) {
        super(name, role, id, email);
        this.school = school; 
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Intern;