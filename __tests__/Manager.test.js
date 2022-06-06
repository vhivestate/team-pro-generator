const Manager = require("../lib/Manager");

test('initiate Manager instance', () => {
    const employee = new Manager();
    expect(typeof(employee)).toBe('object');
});

test('gets role', () => {
    const role = 'Manager';
    const employee = new Manager('V', 0, 'vhivestate@outlook.com', 'office number');
    expect(employee.getRole()).toBe(role);
});