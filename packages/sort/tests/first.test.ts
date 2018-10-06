import { SortOrder, first, comparator } from '../src';
import { collection } from './helpers';

describe('sort', () => {
  it('should sort in asc weight by default', () => {
    expect(first(comparator())(collection('1,3,2'))).toEqual({ weight: 1 });
  });

  it('should sort in asc weight', () => {
    expect(first(comparator(SortOrder.ASC))(collection('1,3,2'))).toEqual({ weight: 1 });
  });

  it('should sort in desc weight', () => {
    expect(first(comparator(SortOrder.DESC))(collection('1,3,2'))).toEqual({ weight: 3 });
  });

  it('should return null if empty', () => {
    expect(first(comparator(SortOrder.DESC))([])).toEqual(null);
  });
});
