import { Status } from './Status';
import { Task } from './Task';

/**
 * Return boolean value if task status is equal to done
 */
export function isStatus(status: Status): (task: Task) => boolean {
  return task => task.status === status;
}
