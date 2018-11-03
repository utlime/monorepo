import { Collection } from './Collection';
import { create, Identity } from './Identity';

function encode(v: number): Identity {
  return create({
    id: v.toString(32),
  });
}

function decode(identity: Identity): number {
  return parseInt(identity.id, 32) || 0;
}

/**
 * Return new unique identity for collection
 */
export function generate(collection: Collection = []): Identity {
  return encode(collection.map(decode).reduce((res, id) => (id >= res ? id + 1 : res), 0));
}
