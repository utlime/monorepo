import { total } from '../src';
import { collection } from './helpers';

describe('sort', () => {
  it('should return total order of collection', () => {
    expect(total(collection('1,3,2'))).toEqual(6);
  });

  it('should return 0 if empty', () => {
    expect(total([])).toEqual(0);
  });
});
