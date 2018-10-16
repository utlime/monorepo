import { Identity, mergeCollection, tidy } from '@utlime/identity';
import { ListTask } from './ListTask';

export function addTag(tags: Identity[]): (listTask: ListTask) => ListTask {
  const merge = mergeCollection(tags.map(tidy));

  return listTask => ({
    id: listTask.id,
    status: listTask.status,
    task: listTask.task,
    weight: listTask.weight,
    tags: merge(listTask.tags),
  });
}
