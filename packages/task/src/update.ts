import { TaskStatus } from './TaskStatus';
import { Task } from './Task';

/**
 * Create new task with options
 */
export function update(
  options: {
    task?: string;
    status?: TaskStatus;
  } = {}
): (task: Task) => Task {
  return task => ({
    task: options.task || task.task,
    status: options.status || task.status,
  });
}
