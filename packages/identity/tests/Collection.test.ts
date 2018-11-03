import { collection } from './helpers';
import {
  create,
  exclude,
  intersect,
  isIncluded,
  isIncludes,
  isIntersected,
  isNotIncluded,
  isNotIncludes,
  isSubSet,
  merge,
} from '../src';

describe('Collection', () => {
  describe('isIncludes', () => {
    it('should return true if identity exists', () => {
      expect(isIncludes(create({ id: '1' }))(collection('1,2'))).toBe(true);
    });
    it('should return false if identity does not exist', () => {
      expect(isIncludes(create({ id: '1' }))(collection('2,3'))).toBe(false);
    });
  });
  describe('isNotIncludes', () => {
    it('should return true if identity does not exist', () => {
      expect(isNotIncludes(create({ id: '1' }))(collection('2,3'))).toBe(true);
    });
    it('should return false if identity exists', () => {
      expect(isNotIncludes(create({ id: '1' }))(collection('1,2'))).toBe(false);
    });
  });
  describe('isIncluded', () => {
    it('should return true if identity exists', () => {
      expect(isIncluded(collection('1,2'))(create({ id: '1' }))).toBe(true);
    });
    it('should return false if identity does not exist', () => {
      expect(isIncluded(collection('2,3'))(create({ id: '1' }))).toBe(false);
    });
  });
  describe('isNotIncluded', () => {
    it('should return true if identity does not exist', () => {
      expect(isNotIncluded(collection('2,3'))(create({ id: '1' }))).toBe(true);
    });
    it('should return false if identity exists', () => {
      expect(isNotIncluded(collection('1,2'))(create({ id: '1' }))).toBe(false);
    });
  });
  describe('isSubSet', () => {
    it('should return true if subset', () => {
      expect(isSubSet(collection('1,2,3'))(collection('2,3'))).toBe(true);
    });
    it('should return false if is not subset', () => {
      expect(isSubSet(collection('1,2,3'))(collection('2,3,4'))).toBe(false);
    });
  });
  describe('isIntersected', () => {
    it('should return true if subset', () => {
      expect(isIntersected(collection('1,2,3'))(collection('2,3'))).toBe(true);
    });
    it('should return true if intersected', () => {
      expect(isIntersected(collection('1,2,3'))(collection('2,3,4'))).toBe(true);
    });
    it('should return false if is not intersected', () => {
      expect(isIntersected(collection('1,2,3'))(collection('4,5,6'))).toBe(false);
    });
  });
  describe('merge', () => {
    it('should return merged collection', () => {
      expect(merge(collection('1,2'))(collection('3,4'))).toEqual(collection('3,4,1,2'));
    });
    it('should return merged collection without duplicates', () => {
      expect(merge(collection('1,2,3'))(collection('3,4'))).toEqual(collection('3,4,1,2'));
    });
  });
  describe('exclude', () => {
    it('should return collection2 exclude collection1', () => {
      expect(exclude(collection('1,2'))(collection('1,2,3,4'))).toEqual(collection('3,4'));
    });
    it('should return collection2 without changes if it does not has intersection', () => {
      expect(exclude(collection('1,2'))(collection('3,4'))).toEqual(collection('3,4'));
    });
  });
  describe('intersect', () => {
    it('should return intersection of collection1 and collection2', () => {
      expect(intersect(collection('1,2,3,4'))(collection('3,4,5,6'))).toEqual(collection('3,4'));
    });
    it('should return empty array if it does not has intersection', () => {
      expect(intersect(collection('1,2'))(collection('3,4'))).toEqual(collection());
    });
  });
});
