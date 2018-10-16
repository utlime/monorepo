import { tidy } from '../src';

describe('tidy', () => {
  it('should has equal id', () => {
    expect(tidy({ id: 'test' })).toEqual({ id: 'test' });
  });

  it('should contain only id', () => {
    expect(tidy({ id: 'test', extra: 'qwe' })).toEqual({ id: 'test' });
  });
});
