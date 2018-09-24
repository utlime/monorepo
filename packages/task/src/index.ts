import { Status } from './Status';
import { Task } from './Task';

export { Status } from './Status';
export { Task } from './Task';

/**
 * Create new task with default options
 */
export function defaults(
  options: { status?: Status } = { status: Status.NotStarted }
): (task: { task: string; status?: Status }) => Task {
  return task => ({
    status: task.status || options.status || Status.NotStarted,
    task: task.task,
  });
}

/**
 * Return boolean value if task status is equal to done
 */
export function isStatus(status: Status): (task: Task) => boolean {
  return task => task.status === status;
}

/**
 * Create new task with options
 */
export function update(
  options: {
    task?: string;
    status?: Status;
  } = {}
): (task: Task) => Task {
  return task => ({
    task: options.task || task.task,
    status: options.status || task.status,
  });
}
