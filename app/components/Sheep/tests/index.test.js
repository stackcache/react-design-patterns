import Sheep from '../index';

describe('<Sheep />', () => {
  it('should create new sheep', () => {
    const sheep = new Sheep('Jim');
    expect(sheep.category).toEqual('Mountain Sheep');
  });
});
