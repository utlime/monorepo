import { SortOrder, sort } from '../src';
import { collection } from './helpers';

describe('sort', () => {
  it('should sort in asc order by default', () => {
    expect(sort()(collection('1,3,2'))).toEqual(collection('1,2,3'));
  });

  it('should sort in asc order', () => {
    expect(sort(SortOrder.ASC)(collection('1,3,2'))).toEqual(collection('1,2,3'));
  });

  it('should sort in desc order', () => {
    expect(sort(SortOrder.DESC)(collection('1,3,2'))).toEqual(collection('3,2,1'));
  });
});
