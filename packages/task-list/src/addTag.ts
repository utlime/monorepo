import { Identity, mergeCollection } from '@utlime/identity';
import { ListTask } from './ListTask';
import { update } from './update';

export function addTag(tags: ReadonlyArray<Identity>): (listTask: ListTask) => ListTask {
  const merge = mergeCollection(tags);

  return listTask => update({ tags: merge(listTask.tags) })(listTask);
}
