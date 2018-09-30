import Organization from '../index';
import { Developer, Designer } from '../../Employee';

describe('<Organization />', () => {
  it("Expect organizations to compile employees' salaries", () => {
    const john = new Developer('John Doe', 15000);
    const jane = new Designer('Jane Doe', 18000);
    const org = new Organization();
    org.addEmployee(john);
    org.addEmployee(jane);
    expect(org.getNetSalaries()).toEqual(33000);
  });
});
