import { Task } from '@utlime/task';
import { Identity } from '@utlime/identity';
import { Comparable } from '@utlime/sort';

export interface ListTask extends Task, Identity, Comparable {
  readonly tags: ReadonlyArray<Identity>;
}
