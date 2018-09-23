import { isNotInCollection } from '../src';
import { collection } from './helpers';

describe('isNotInCollection', () => {
  it('should be falsy when identity in collection', () => {
    expect(isNotInCollection(collection('1,2'))({ id: '1' })).toBeFalsy();
  });

  it('should be truthy when identity not in collection', () => {
    expect(isNotInCollection(collection('1,2'))({ id: '3' })).toBeTruthy();
  });

  it('should be truthy when collection is empty', () => {
    expect(isNotInCollection([])({ id: '3' })).toBeTruthy();
  });
});
