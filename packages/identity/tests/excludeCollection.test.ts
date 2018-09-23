import { collection } from './helpers';
import { excludeCollection } from '../src';

describe('excludeCollection', () => {
  it('should not contains collection', () => {
    expect(excludeCollection(collection('3,4'))(collection('1,2,3,4'))).toEqual(collection('1,2'));
  });

  it('should not change if no intersections', () => {
    expect(excludeCollection(collection('5,6'))(collection('1,2,3,4'))).toEqual(collection('1,2,3,4'));
  });
});
