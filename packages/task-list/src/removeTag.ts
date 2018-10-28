import { Identity, excludeCollection } from '@utlime/identity';
import { ListTask } from './ListTask';
import { update } from './update';

export function removeTag(tags: ReadonlyArray<Identity>): (listTask: ListTask) => ListTask {
  const exclude = excludeCollection(tags);

  return listTask => update({ tags: exclude(listTask.tags) })(listTask);
}
