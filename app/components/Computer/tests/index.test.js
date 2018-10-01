import Computer from '../index';

describe('<Computer />', () => {
  it('should contain the correct functions', () => {
    const computer = new Computer();
    expect(computer.getElectricShock).toBeInstanceOf(Function);
    expect(computer.makeSound).toBeInstanceOf(Function);
    expect(computer.showLoadingScreen).toBeInstanceOf(Function);
    expect(computer.bam).toBeInstanceOf(Function);
    expect(computer.closeEverything).toBeInstanceOf(Function);
    expect(computer.sooth).toBeInstanceOf(Function);
    expect(computer.pullCurrent).toBeInstanceOf(Function);
  });
  it('should return the correct function results', () => {
    const computer = new Computer();

    expect(computer.getElectricShock()).toEqual('ouch! ');
    expect(computer.makeSound()).toEqual('beep beep! ');
    expect(computer.showLoadingScreen()).toEqual('loading... ');
    expect(computer.bam()).toEqual('ready! ');
    expect(computer.closeEverything()).toEqual('bup bup bup buzz! ');
    expect(computer.sooth()).toEqual('zzzzz! ');
    expect(computer.pullCurrent()).toEqual('haaah! ');
  });
});
