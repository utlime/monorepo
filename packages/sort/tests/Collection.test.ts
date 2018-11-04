import { comparator, create, first, sort, SortOrder } from '../src';
import { collection } from './helpers';

describe('Collection', () => {
  describe('comparator', () => {
    it('should return negative value by default', () => {
      expect(comparator()(create({ weight: 1 }), create({ weight: 2 }))).toBeLessThan(0);
    });
    it('should return negative value when ASC', () => {
      expect(comparator(SortOrder.ASC)(create({ weight: 1 }), create({ weight: 2 }))).toBeLessThan(0);
    });
    it('should return positive value when ASC', () => {
      expect(comparator(SortOrder.ASC)(create({ weight: 2 }), create({ weight: 1 }))).toBeGreaterThan(0);
    });
    it('should return zero value when ASC', () => {
      expect(comparator(SortOrder.ASC)(create({ weight: 1 }), create({ weight: 1 }))).toBe(0);
    });
    it('should return positive value when DESC', () => {
      expect(comparator(SortOrder.DESC)(create({ weight: 1 }), create({ weight: 2 }))).toBeGreaterThan(0);
    });
    it('should return negative value when DESC', () => {
      expect(comparator(SortOrder.DESC)(create({ weight: 2 }), create({ weight: 1 }))).toBeLessThan(0);
    });
    it('should return zero value when DESC', () => {
      expect(comparator(SortOrder.DESC)(create({ weight: 1 }), create({ weight: 1 }))).toBe(0);
    });
  });
  describe('sort', () => {
    it('should return sorted array', () => {
      expect(sort(comparator())(collection('5,43,1,2,7,8'))).toEqual(collection('1,2,5,7,8,43'));
    });
  });
  describe('first', () => {
    it('should return first element', () => {
      expect(first(comparator())(collection('5,43,1,2,7,8'))).toEqual(create({ weight: 1 }));
    });
  });
});
