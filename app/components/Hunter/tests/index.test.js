import Hunter from '../index';
import AfricanLion from '../../AfricanLion';

describe('<Hunter />', () => {
  it('Expect hunter to hunt lions', () => {
    const afLion = new AfricanLion();
    const hunter = new Hunter();
    expect(hunter.hunt(afLion)).toEqual('african lion roar!');
  });
});
