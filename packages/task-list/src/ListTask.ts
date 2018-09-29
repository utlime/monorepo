import { Task } from '@utlime/task';
import { Identity } from '@utlime/identity';
import { Sortable } from '@utlime/sort';
import { Tag } from '@utlime/tag';

export interface ListTag extends Tag, Identity {}

export interface ListTask extends Task, Identity, Sortable {
  tags: ListTag[]
}
