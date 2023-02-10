const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, role, id, email, officeNum){
        super(name, role, id, email);
        this.officeNum = officeNum; 
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;