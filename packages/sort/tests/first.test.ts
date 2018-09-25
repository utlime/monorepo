import { SortOrder, first } from '../src';
import { collection } from './helpers';

describe('sort', () => {
  it('should sort in asc order by default', () => {
    expect(first()(collection('1,3,2'))).toEqual({ order: 1 });
  });

  it('should sort in asc order', () => {
    expect(first(SortOrder.ASC)(collection('1,3,2'))).toEqual({ order: 1 });
  });

  it('should sort in desc order', () => {
    expect(first(SortOrder.DESC)(collection('1,3,2'))).toEqual({ order: 3 });
  });

  it('should return null if empty', () => {
    expect(first(SortOrder.DESC)([])).toEqual(null);
  });
});
