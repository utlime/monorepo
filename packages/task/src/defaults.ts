import { Status } from './Status';
import { Task } from './Task';

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
