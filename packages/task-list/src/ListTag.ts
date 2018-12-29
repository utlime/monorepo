import { Identity } from '@utlime/identity';
import { Tag } from '@utlime/tag';

export interface ListTag {
  readonly identity: Identity;
  readonly tag: Tag;
}

export function create(options: ListTag): ListTag {
  return ({
    identity: options.identity,
    tag: options.tag,
  })
}

export function update(options: Partial<ListTag>): (listTag: ListTag) => ListTag {
  return listTag => create({
    identity: options.identity || listTag.identity,
    tag: options.tag || listTag.tag,
  })
}
