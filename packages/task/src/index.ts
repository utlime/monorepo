export enum Status {
  Done = 'done',
  Unfinished = 'unfinished',
}

/**
 * Task with name and status
 */
export interface Task {
  task: string;
  status: Status;
}

/**
 * Create new task with default options
 */
export function defaults(
  options: { status?: Status } = { status: Status.Unfinished }
): (task: { task: string; status?: Status }) => Task {
  return task => ({
    status: task.status || options.status || Status.Unfinished,
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
