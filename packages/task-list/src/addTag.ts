import { Identity, mergeCollection } from '@utlime/identity';
import { ListTask } from './ListTask';

export function addTag(tags: ReadonlyArray<Identity>): (listTask: ListTask) => ListTask {
  const merge = mergeCollection(tags);

  return listTask => ({
    id: listTask.id,
    status: listTask.status,
    task: listTask.task,
    weight: listTask.weight,
    tags: merge(listTask.tags),
  });
}
