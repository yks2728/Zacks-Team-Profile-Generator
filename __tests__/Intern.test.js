const Intern = require('../lib/Intern');

test("create intern object",() => {
    const intern = new Intern("Tom", 3, "goodvibes2020@gmail.com", "UCONN")

    expect(intern.school).toEqual(expect.any(String))
})

test("create school function",() => {
    const intern = new Intern("Tom", 3, "goodvibes2020@gmail.com", "UCONN")

    expect(intern.getSchool()).toEqual(expect.any(String))
})

test("create role function",() => {
    const intern = new Intern("Tom", 3, "goodvibes2020@gmail.com", "UCONN")

    expect(intern.getRole()).toEqual("Intern")
})