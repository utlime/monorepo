import { Identity, excludeCollection } from '@utlime/identity';
import { cleanIdentity } from './cleanIdentity';
import { ListTask } from './ListTask';

export function removeTag(tags: Identity[]): (listTask: ListTask) => ListTask {
  const exclude = excludeCollection(tags.map(cleanIdentity));

  return listTask => ({
    id: listTask.id,
    status: listTask.status,
    task: listTask.task,
    weight: listTask.weight,
    tags: exclude(listTask.tags),
  });
}
