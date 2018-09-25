/**
 * Object which has order
 */
export interface Sortable {
  order: number;
}

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
export function comparator(order: SortOrder = SortOrder.ASC): (a: Sortable, b: Sortable) => number {
  return order === SortOrder.DESC ? (a, b) => b.order - a.order : (a, b) => a.order - b.order;
}

/**
 * Sort given collection
 */
export function sort(order: SortOrder = SortOrder.ASC): <T extends Sortable>(items: T[]) => T[] {
  const cmp = comparator(order);

  return items => items.sort(cmp);
}

/**
 * Return first item after sorting
 */
export function first(order: SortOrder = SortOrder.ASC): <T extends Sortable>(items: T[]) => T | null {
  const cmp = comparator(order);

  return <T extends Sortable>(items: T[]) =>
    items.reduce((prev: T | null, cur: T) => (prev === null || cmp(prev, cur) > 0 ? cur : prev), null);
}

/**
 * Return order of collection
 */
export function total(items: Sortable[]): number {
  return items.reduce((total, cur) => total + cur.order, 0);
}
