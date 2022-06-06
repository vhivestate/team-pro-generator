const Engineer = require("../lib/Engineer");

test('initiate Engineer instance', () => {
    const employee = new Engineer();
    expect(typeof(employee)).toBe('object');
});

test('gets role', () => {
    const role = 'Engineer';
    const employee = new Engineer('V', 0, 'vhivestate@outlook.com', 'githubUser');
    expect(employee.getRole()).toBe(role);
});

test('gets github', () => {
    const github = 'githubUser'
    const employee = new Engineer('V', 0, 'vhivestate@outlook.com', 'githubUser');
    expect(employee.getGithub()).toBe(github);
});