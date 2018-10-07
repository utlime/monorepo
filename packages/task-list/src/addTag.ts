import { Identity, mergeCollection } from '@utlime/identity';
import { cleanIdentity } from './cleanIdentity';
import { ListTask } from './ListTask';

export function addTag(tags: Identity[]): (listTask: ListTask) => ListTask {
  const merge = mergeCollection(tags.map(cleanIdentity));

  return listTask => ({
    id: listTask.id,
    status: listTask.status,
    task: listTask.task,
    weight: listTask.weight,
    tags: merge(listTask.tags),
  });
}
