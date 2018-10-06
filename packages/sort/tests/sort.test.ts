import { SortOrder, sort, comparator } from '../src';
import { collection } from './helpers';

describe('sort', () => {
  it('should sort in asc weight by default', () => {
    expect(sort(comparator())(collection('1,3,2'))).toEqual(collection('1,2,3'));
  });

  it('should sort in asc weight', () => {
    expect(sort(comparator(SortOrder.ASC))(collection('1,3,2'))).toEqual(collection('1,2,3'));
  });

  it('should sort in desc weight', () => {
    expect(sort(comparator(SortOrder.DESC))(collection('1,3,2'))).toEqual(collection('3,2,1'));
  });
});
