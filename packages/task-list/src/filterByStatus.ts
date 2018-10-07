import { TaskStatus } from '@utlime/task';
import { ListTask } from './ListTask';

export function filterByStatus(statuses: TaskStatus[]): (task: ListTask) => boolean {
  return task => statuses.indexOf(task.status) !== -1;
}
