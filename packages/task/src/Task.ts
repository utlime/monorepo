import { TaskStatus } from './TaskStatus';

/**
 * This contains task and current task status
 */
export interface Task {
  readonly task: string;
  readonly status: TaskStatus;
}

/**
 * Create new task with default options
 */
export function create(options: { task: string; status?: TaskStatus }): Task {
  return {
    status: options.status || TaskStatus.NotStarted,
    task: options.task,
  };
}

/**
 * Create new task with options
 */
export function update(options: Partial<Task> = {}): (task: Task) => Task {
  return task =>
    create({
      task: options.task || task.task,
      status: options.status || task.status,
    });
}

/**
 * Return boolean value if task status in statuses
 */
export function isStatus(statuses: ReadonlyArray<TaskStatus>): (task: Task) => boolean {
  return task => statuses.indexOf(task.status) !== -1;
}
