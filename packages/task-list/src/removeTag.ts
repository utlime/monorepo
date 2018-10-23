import { Identity, excludeCollection, tidy } from '@utlime/identity';
import { ListTask } from './ListTask';

export function removeTag(tags: ReadonlyArray<Identity>): (listTask: ListTask) => ListTask {
  const exclude = excludeCollection(tags);

  return listTask => ({
    id: listTask.id,
    status: listTask.status,
    task: listTask.task,
    weight: listTask.weight,
    tags: exclude(listTask.tags),
  });
}
