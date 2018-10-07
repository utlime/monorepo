import { defaults as defaultsTask, TaskStatus } from '@utlime/task';
import { ListTask } from './ListTask';

export function defaults(
  options: { status?: TaskStatus; weight?: number } = {}
): (listTask: { task: string; id: string }) => ListTask {
  return ({ task, id }) => ({
    id,
    ...defaultsTask(options)({ task }),
    weight: options.weight || 0,
    tags: [],
  });
}
