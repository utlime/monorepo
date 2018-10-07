import { update as updateTask, TaskStatus } from '@utlime/task';
import { cleanIdentity } from './cleanIdentity';
import { ListTask } from './ListTask';

export function update(
  options: {
    status?: TaskStatus;
    task?: string;
    id?: string;
    weight?: number;
  } = {}
): (listTask: ListTask) => ListTask {
  return listTask => ({
    id: options.id || listTask.id,
    ...updateTask(options)(listTask),
    weight: options.weight !== undefined ? options.weight : listTask.weight,
    tags: listTask.tags.map(cleanIdentity),
  });
}
