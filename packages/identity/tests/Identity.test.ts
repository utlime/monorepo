import { create, isEqual } from '../src';

describe('Identity', () => {
  describe('create', () => {
    it('should create identity with correct id', () => {
      expect(create({ id: '1' })).toEqual({ id: '1' });
    });
    it('should create new object', () => {
      const options = { id: '1' };
      expect(create(options)).not.toBe(options);
    });
  });
  describe('isEqual', () => {
    it('should return true for equal object', () => {
      const identity = create({ id: '1' });
      expect(isEqual(identity)(identity)).toBe(true);
    });
    it('should return true for object with equal ids', () => {
      const identity1 = create({ id: '1' });
      const identity2 = create({ id: '1' });
      expect(isEqual(identity1)(identity2)).toBe(true);
    });
    it('should return false for object with different ids', () => {
      const identity1 = create({ id: '1' });
      const identity2 = create({ id: '2' });
      expect(isEqual(identity1)(identity2)).toBe(false);
    });
  });
});
