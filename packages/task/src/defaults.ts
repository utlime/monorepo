import { TaskStatus } from './TaskStatus';
import { Task } from './Task';

/**
 * Create new task with default options
 */
export function defaults(
  options: { status?: TaskStatus } = { status: TaskStatus.NotStarted }
): (task: { task: string; status?: TaskStatus }) => Task {
  return task => ({
    status: task.status || options.status || TaskStatus.NotStarted,
    task: task.task,
  });
}
