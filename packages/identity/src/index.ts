export interface Identity {
  id: string;
}

/**
 * Check is collection contain identity
 */
export function isInCollection(collection: Identity[]): (identity: Identity) => boolean {
  return identity => collection.some(({ id }) => id === identity.id);
}

/**
 * Check is collection not contain identity
 */
export function isNotInCollection(collection: Identity[]): (identity: Identity) => boolean {
  return identity => !collection.some(({ id }) => id === identity.id);
}

/**
 * Merge two collections of identities, without duplicates
 */
export function mergeCollection<T extends Identity>(collection1: T[]): (collection2: T[]) => T[] {
  const excludeDuplicates = excludeCollection(collection1);
  return collection2 => collection1.concat(excludeDuplicates(collection2));
}

/**
 * Return sub collection from collection2, exclude identities from collection1
 */
export function excludeCollection<T extends Identity>(collection1: T[]): (collection2: T[]) => T[] {
  const exclude = isNotInCollection(collection1);
  return collection2 => collection2.filter(exclude);
}

/**
 * Check if collection is subset of identities
 */
export function containCollection(
  atLeastOne: boolean = true
): (collection: Identity[]) => (identities: Identity[]) => boolean {
  if (atLeastOne) {
    return collection => identities => identities.some(isInCollection(collection));
  }

  return collection => identities => collection.filter(isInCollection(identities)).length === collection.length;
}

/**
 * Return Identity object
 */
export function tidy<T extends Identity>({ id }: T): Identity {
  return { id };
}

/**
 * Return random string
 */
function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Return new identity
 */
export function create<T extends Identity>(generator: () => string = generateId): (collection?: T[]) => Identity {
  return (collection = []) => {
    let identity: Identity;
    const exists = isInCollection(collection);

    do {
      identity = { id: generator() };
    } while (exists(identity));

    return identity;
  }
}
