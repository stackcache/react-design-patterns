import Employee from '../index';

describe('<Employee />', () => {
  it('Expect employees to have names and salaries', () => {
    const emp = new Employee('John Doe', 10000);
    expect(emp.name).toEqual('John Doe');
    expect(emp.salary).toEqual(10000);
  });
});
