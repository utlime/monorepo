/**
 * Responsible for identity
 */
export interface Identity {
  readonly id: string;
}

/**
 * Create new identity
 */
export function create(options: { id: string }): Identity {
  return { id: options.id };
}

/**
 * Ensure that identities the same
 */
export function isEqual(a: Identity): (b: Identity) => boolean {
  return b => b === a || a.id === b.id;
}
