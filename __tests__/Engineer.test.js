const Engineer = require('../lib/Engineer');

test("create the engineer object",() => {
    const engineer = new Engineer("Rob", 2, "rushsucks@gmail.com", "yankeefanatic28")

    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()))
})

test("get github",() => {
    const engineer = new Engineer("Rob", 2, "rushsucks@gmail.com", "yankeefanatic28")

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()))
})

test("get role",() => {
    const engineer = new Engineer("Rob", 2, "rushsucks@gmail.com", "yankeefanatic28")

    expect(engineer.getRole()).toEqual("Engineer")
})