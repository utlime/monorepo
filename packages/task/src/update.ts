import { Status } from './Status';
import { Task } from './Task';

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
