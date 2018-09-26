import { TaskStatus } from './TaskStatus';
import { Task } from './Task';

/**
 * Return boolean value if task status is equal to done
 */
export function isStatus(status: TaskStatus): (task: Task) => boolean {
  return task => task.status === status;
}
