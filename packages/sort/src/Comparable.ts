/**
 * Object which has weight
 */
export interface Comparable {
  readonly weight: number;
}

/**
 * Return new compatible object
 */
export function create(options: { weight: number }): Comparable {
  return { weight: options.weight };
}

/**
 * Return new compatible object
 */
export function update(options: Partial<Comparable> = {}): (comparable: Comparable) => Comparable {
  return comparable =>
    create({
      weight: options.weight || comparable.weight,
    });
}

/**
 * Compare two object
 */
export function compare(a: Comparable): (b: Comparable) => number {
  return b => a.weight - b.weight;
}
