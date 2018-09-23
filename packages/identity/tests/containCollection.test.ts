import { containCollection } from '../src';
import { collection } from './helpers';

describe('containCollection', () => {
  it('should be truthy when at least one in collection by default', () => {
    expect(containCollection()(collection('1,2,3'))(collection('1,4')));
  });

  it('should be truthy when at least one in collection', () => {
    expect(containCollection(true)(collection('1,2,3'))(collection('1,4')));
  });

  it('should be falsy when at least one not in collection', () => {
    expect(containCollection(true)(collection('1,2,3'))(collection('4,5')));
  });

  it('should be truthy when all in collection', () => {
    expect(containCollection(false)(collection('1,2,3'))(collection('1,2,3,4,5')));
  });

  it('should be falsy when not all in collection', () => {
    expect(containCollection(false)(collection('1,2,3'))(collection('1,3,4,5')));
  });
});
