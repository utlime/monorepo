import { SortOrder, comparator } from '../src';

describe('comparator', () => {
  it('should compare in asc order by default', () => {
    expect(comparator()({ order: 1 }, { order: 3 })).toBeLessThan(0);
  });

  it('should compare in asc order', () => {
    expect(comparator(SortOrder.ASC)({ order: 1 }, { order: 2 })).toBeLessThan(0);
  });

  it('should compare in asc order ', () => {
    expect(comparator(SortOrder.ASC)({ order: 3 }, { order: 2 })).toBeGreaterThan(0);
  });

  it('should compare in asc order ', () => {
    expect(comparator(SortOrder.ASC)({ order: 1 }, { order: 1 })).toBe(0);
  });

  it('should compare in desc order', () => {
    expect(comparator(SortOrder.DESC)({ order: 2 }, { order: 1 })).toBeLessThan(0);
  });

  it('should compare in desc order', () => {
    expect(comparator(SortOrder.DESC)({ order: 2 }, { order: 3 })).toBeGreaterThan(0);
  });

  it('should compare in desc order', () => {
    expect(comparator(SortOrder.DESC)({ order: 1 }, { order: 1 })).toBe(0);
  });
});
