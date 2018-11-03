import { isEqual, Identity } from './Identity';

/**
 * Collection of identity
 */
export type Collection = ReadonlyArray<Identity>;

/**
 * Check if collection includes identity
 */
export function isIncludes(identity: Identity): (collection: Collection) => boolean {
  return collection => collection.some(isEqual(identity));
}

/**
 * Check if collection doesn't include identity
 */
export function isNotIncludes(identity: Identity): (collection: Collection) => boolean {
  return collection => !collection.some(isEqual(identity));
}

/**
 * Check if identity included in collection
 */
export function isIncluded(collection: Collection): (identity: Identity) => boolean {
  return identity => collection.some(isEqual(identity));
}

/**
 * Check if identity doesn't included in collection
 */
export function isNotIncluded(collection: Collection): (identity: Identity) => boolean {
  return identity => !collection.some(isEqual(identity));
}

/**
 * Check that collection2 fully included to collection1
 */
export function isSubSet(collection1: Collection): (collection2: Collection) => boolean {
  return collection2 => exclude(collection1)(collection2).length === 0;
}

/**
 * Check that collection2 intersected with collection1
 */
export function isIntersected(collection1: Collection): (collection2: Collection) => boolean {
  return collection2 => intersect(collection1)(collection2).length > 0;
}

/**
 * Merge two collections to new without duplicates
 */
export function merge(collection1: Collection): (collection2: Collection) => Collection {
  return collection2 => collection2.concat(exclude(collection2)(collection1));
}

/**
 * It exclude identities from collection2, which exists in collection1
 */
export function exclude(collection1: Collection): (collection2: Collection) => Collection {
  return collection2 => collection2.filter(isNotIncluded(collection1));
}

/**
 * Computes the intersection of arrays.
 */
export function intersect(collection1: Collection): (collection2: Collection) => Collection {
  return collection2 => collection2.filter(isIncluded(collection1));
}
