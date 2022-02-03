const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name, id, email);

        this.officenumber = officenumber
    }
    getName() {return this.name}
    getId() {return this.id}
    getEmail() {return this.email}
    getOfficeNumber() {return this.officenumber}
    getRole() {return "Manager"}
}

module.exports = Manager