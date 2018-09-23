import { isInCollection } from '../src';
import { collection } from './helpers';

describe('isInCollection', () => {
  it('should be truthy when identity in collection', () => {
    expect(isInCollection(collection('1,2'))({ id: '1' })).toBeTruthy();
  });

  it('should be falsy when identity not in collection', () => {
    expect(isInCollection(collection('1,2'))({ id: '3' })).toBeFalsy();
  });

  it('should be falsy when collection is empty', () => {
    expect(isInCollection([])({ id: '3' })).toBeFalsy();
  });
});
