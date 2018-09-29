import { containCollection } from '@utlime/identity';
import { ListTag, ListTask } from './ListTask';

export function filterByTags(atLeastOne: boolean = true): (tags: ListTag[]) => (task: ListTask) => boolean {
  return tags => {
    const contain = containCollection(atLeastOne)(tags);

    return task => contain(task.tags)
  }
}
