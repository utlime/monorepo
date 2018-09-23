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
export function mergeCollection(collection1: Identity[]): (collection2: Identity[]) => Identity[] {
  const excludeDuplicates = excludeCollection(collection1);
  return collection2 => collection1.concat(excludeDuplicates(collection2));
}

/**
 * Return sub collection from collection2, exclude identities from collection1
 */
export function excludeCollection(collection1: Identity[]): (collection2: Identity[]) => Identity[] {
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
