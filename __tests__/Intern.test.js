const Intern = require("../lib/Intern");

test('initiate Intern instance', () => {
    const employee = new Intern();
    expect(typeof(employee)).toBe('object');
});

test('gets role', () => {
    const role = 'Intern';
    const employee = new Intern('V', 0, 'vhivestate@outlook.com', 'schoolName');
    expect(employee.getRole()).toBe(role);
});