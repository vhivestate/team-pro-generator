const Employee = require("../lib/Employee");

test('initiate Employee instance', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('creates name', () => {
    const name = 'V';
    const employee = new Employee(name);
    expect(employee.name).toBe('V');
});

test('create id', () => {
    const id = 801;
    const employee = new Employee('V', id);
    expect(employee.id).toBe(id);
})

test('create email', () => {
    const email = 'vhivestate@outlook.com';
    const employee = new Employee('V', 0, email);
    expect(employee.email).toBe(email);
});

test('gets employee name', () => {
    const name = 'V';
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test('gets employee id', () => {
    const id = 801;
    const employee = new Employee('V', id);
    expect(employee.getId()).toBe(id);
});

test('gets email', () => {
    const email = 'vhivestate@outlook.com';
    const employee = new Employee('V', 0, email);
    expect(employee.getEmail()).toBe(email);
});

test('gets role', () => {
    const role = 'Employee';
    const employee = new Employee('V', 0, 'vhivestate@outlook.com');
    expect(employee.getRole()).toBe(role);
});