const Employee = require('../lib/Employee');

test("create an employee object", () => {
    const employee = new Employee ("Zack", 1, "zackg007@verizon.net");

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

test("get the name of the employee", () => {
    const employee = new Employee ("Zack", 1, "zackg007@verizon.net");

    expect(employee.getName()).toEqual(expect.any(String))
})

test("get the id of the employee", () => {
    const employee = new Employee ("Zack", 1, "zackg007@verizon.net");

    expect(employee.getId()).toEqual(expect.any(Number))
})

test("get the email of the employee", () => {
    const employee = new Employee ("Zack", 1, "zackg007@verizon.net");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

test("get the role of the employee", () => {
    const employee = new Employee ("Zack", 1, "zackg007@verizon.net");

    expect(employee.getRole()).toEqual("Employee")
})
