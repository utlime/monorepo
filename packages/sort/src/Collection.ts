import { Comparable, compare } from './Comparable';

/**
 * Comparator type
 */
export type Comparator = (a: Comparable, b: Comparable) => number;

/**
 * Collection of comparable items
 */
export type Collection = ReadonlyArray<Comparable>;

/**
 * SortOrder
 */
export const enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

/**
 * Return new comparator
 */
export function comparator(order: SortOrder = SortOrder.ASC): Comparator {
  return order === SortOrder.DESC ? (a, b) => compare(b)(a) : (a, b) => compare(a)(b);
}

/**
 * Sort given collection
 */
export function sort(cmp: Comparator): (items: Collection) => Collection {
  return items => [...items].sort(cmp);
}

/**
 * Return first item after sorting
 */
export function first(cmp: Comparator): (items: Collection) => Comparable | null {
  return (items: Collection) =>
    items.reduce(
      (prev: Comparable | null, cur: Comparable) => (prev === null || cmp(prev, cur) > 0 ? cur : prev),
      null
    );
}
