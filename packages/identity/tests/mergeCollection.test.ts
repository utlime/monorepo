import { collection } from './helpers';
import { mergeCollection } from '../src';

describe('mergeCollection', () => {
  it('should contains all identities', () => {
    expect(mergeCollection(collection('1,2'))(collection('3,4'))).toEqual(collection('1,2,3,4'));
  });

  it('should not contains duplicates', () => {
    expect(mergeCollection(collection('1,2,3'))(collection('3,4'))).toEqual(collection('1,2,3,4'));
  });
});
