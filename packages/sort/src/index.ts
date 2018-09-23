/**
 * Object which has weight
 */
export interface Weightable {
  weight: number;
}

/**
 * Order
 */
export enum Order {
  ASC,
  DESC,
}

/**
 * Comparator
 */
export function comparator(order: Order = Order.ASC): (a: Weightable, b: Weightable) => number {
  return order === Order.DESC ? (a, b) => b.weight - a.weight : (a, b) => a.weight - b.weight;
}

/**
 * Sort given collection
 */
export function sort(order: Order = Order.ASC): <T extends Weightable>(items: T[]) => T[] {
  const cmp = comparator(order);

  return items => items.sort(cmp);
}

/**
 * Return first item after sorting
 */
export function first(order: Order = Order.ASC): <T extends Weightable>(items: T[]) => T | null {
  const cmp = comparator(order);

  return <T extends Weightable>(items: T[]) =>
    items.reduce((prev: T | null, cur: T) => (prev === null || cmp(prev, cur) > 0 ? cur : prev), null);
}

/**
 * Return weight of collection
 */
export function total(items: Weightable[]): number {
  return items.reduce((total, cur) => total + cur.weight, 0);
}
