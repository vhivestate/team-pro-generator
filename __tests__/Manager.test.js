const Manager = require("../lib/Manager");

test('initiate Manager instance', () => {
    const employee = new Manager();
    expect(typeof(employee)).toBe('object');
});

test('gets role', () => {
    const role = 'Manager';
    const employee = new Manager('V', 0, 'vhivestate@outlook.com', '801940');
    expect(employee.getRole()).toBe(role);
});

test('office number', () => {
    const number = '801940'
    const employee = new Manager('V', 0, 'vhivestate@outlook.com', number);
    expect(employee.officeNumber).toBe(number);
});

test('gets office number', () => {
    const officeNum = '801940'
    const employee = new Manager('V', 0, 'vhivestate@outlook.com', officeNum);
    expect(employee.getOfficeNumber()).toBe(officeNum);
});