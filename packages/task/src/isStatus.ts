import { TaskStatus } from './TaskStatus';
import { Task } from './Task';

/**
 * Return boolean value if task status in statuses
 */
export function isStatus(statuses: ReadonlyArray<TaskStatus>): (task: Task) => boolean {
  return task => statuses.indexOf(task.status) !== -1;
}
