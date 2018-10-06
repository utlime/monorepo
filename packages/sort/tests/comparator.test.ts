import { SortOrder, comparator } from '../src';

describe('comparator', () => {
  it('should compare in asc weight by default', () => {
    expect(comparator()({ weight: 1 }, { weight: 3 })).toBeLessThan(0);
  });

  it('should compare in asc weight', () => {
    expect(comparator(SortOrder.ASC)({ weight: 1 }, { weight: 2 })).toBeLessThan(0);
  });

  it('should compare in asc weight ', () => {
    expect(comparator(SortOrder.ASC)({ weight: 3 }, { weight: 2 })).toBeGreaterThan(0);
  });

  it('should compare in asc weight ', () => {
    expect(comparator(SortOrder.ASC)({ weight: 1 }, { weight: 1 })).toBe(0);
  });

  it('should compare in desc weight', () => {
    expect(comparator(SortOrder.DESC)({ weight: 2 }, { weight: 1 })).toBeLessThan(0);
  });

  it('should compare in desc weight', () => {
    expect(comparator(SortOrder.DESC)({ weight: 2 }, { weight: 3 })).toBeGreaterThan(0);
  });

  it('should compare in desc weight', () => {
    expect(comparator(SortOrder.DESC)({ weight: 1 }, { weight: 1 })).toBe(0);
  });
});
