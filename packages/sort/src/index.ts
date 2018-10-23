/**
 * Object which has weight
 */
export interface Comparable {
  readonly weight: number;
}

/**
 * Comparator type
 */
export type Comparator = (a: Comparable, b: Comparable) => number;

/**
 * SortOrder
 */
export enum SortOrder {
  ASC,
  DESC,
}

/**
 * Comparator
 */
export function comparator(order: SortOrder = SortOrder.ASC): Comparator {
  return order === SortOrder.DESC ? (a, b) => b.weight - a.weight : (a, b) => a.weight - b.weight;
}

/**
 * Sort given collection
 */
export function sort(cmp: Comparator): <T extends Comparable>(items: ReadonlyArray<T>) => ReadonlyArray<T> {
  return items => [...items].sort(cmp);
}

/**
 * Return first item after sorting
 */
export function first(cmp: Comparator): <T extends Comparable>(items: ReadonlyArray<T>) => T | null {
  return <T extends Comparable>(items: ReadonlyArray<T>) =>
    items.reduce((prev: T | null, cur: T) => (prev === null || cmp(prev, cur) > 0 ? cur : prev), null);
}

/**
 * Return weight of collection
 */
export function total(items: ReadonlyArray<Comparable>): number {
  return items.reduce((total, cur) => total + cur.weight, 0);
}
