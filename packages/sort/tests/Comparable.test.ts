import { Comparable, compare, create, update } from '../src';

describe('Comparable', () => {
  describe('create', () => {
    it('should create compatible object', () => {
      expect(create({ weight: 1 })).toEqual({ weight: 1 } as Comparable);
    });
    it('should create new object', () => {
      const options = { weight: 1 };
      expect(create(options)).not.toBe(options);
    });
  });
  describe('update', () => {
    it('should update compatible object', () => {
      expect(update({ weight: 2 })(create({ weight: 1 }))).toEqual({ weight: 2 } as Comparable);
    });
    it('should create new object', () => {
      const comparable = create({ weight: 1 });
      expect(update({ weight: 2 })(comparable)).not.toBe(comparable);
    });
    it('should return equal object', () => {
      const comparable = create({ weight: 1 });
      expect(update()(comparable)).toEqual(comparable);
    });
  });
  describe('compare', () => {
    it('should return negative value', () => {
      expect(compare(create({ weight: 1 }))(create({ weight: 2 }))).toBeLessThan(0);
    });
    it('should return positive value', () => {
      expect(compare(create({ weight: 2 }))(create({ weight: 1 }))).toBeGreaterThan(0);
    });
    it('should return zero value', () => {
      expect(compare(create({ weight: 1 }))(create({ weight: 1 }))).toBe(0);
    });
  });
});
