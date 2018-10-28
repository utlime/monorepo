import { Identity, containCollection } from '@utlime/identity';
import { ListTask } from './ListTask';

export function filterByTags(
  atLeastOne: boolean = true
): (tags: ReadonlyArray<Identity>) => (task: ListTask) => boolean {
  return tags => {
    const contain = containCollection(atLeastOne)(tags);

    return task => contain(task.tags);
  };
}
