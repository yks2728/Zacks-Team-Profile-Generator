const Manager = require('../lib/Manager');

test("create a manager object", () => {
    const manager = new Manager("Zack", 1, "zackg007@verizon.net", 1);

    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test("get the role of the manager", () => {
    const manager = new Manager("Zack", 1, "zackg007@verizon.net", 1);

    expect(manager.getRole()).toEqual("Manager")
})