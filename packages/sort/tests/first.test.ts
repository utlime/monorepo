import { Order, first } from '../src';
import { collection } from './helpers';

describe('sort', () => {
  it('should sort in asc order by default', () => {
    expect(first()(collection('1,3,2'))).toEqual({ weight: 1 });
  });

  it('should sort in asc order', () => {
    expect(first(Order.ASC)(collection('1,3,2'))).toEqual({ weight: 1 });
  });

  it('should sort in desc order', () => {
    expect(first(Order.DESC)(collection('1,3,2'))).toEqual({ weight: 3 });
  });

  it('should return null if empty', () => {
    expect(first(Order.DESC)([])).toEqual(null);
  });
});
