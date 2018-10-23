import { Identity } from '@utlime/identity';
import { Comparable } from '@utlime/sort';
import { Tag } from '@utlime/tag';

export interface ListTag extends Tag, Identity, Comparable {}

const x: ListTag = {
  id: 'qwe',
  tag: 'qwe',
  weight: 1,
  color: 'qwe'
};
