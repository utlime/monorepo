/**
 * Task with name and status
 */
export interface Task {
  task: string;
  done: boolean;
}

/**
 * Create new task with default options
 */
export function defaults(
  options: { done?: boolean } = { done: false }
): (task: { task: string; done?: boolean }) => Task {
  return task => ({
    done: task.done || options.done || false,
    task: task.task,
  });
}

/**
 * Return boolean value if task status is equal to done
 */
export function isDone(done: boolean): (task: Task) => boolean {
  return task => task.done === done;
}

/**
 * Create new task with options
 */
export function update(
  options: {
    task?: string;
    done?: boolean;
  } = {}
): (task: Task) => Task {
  return task => ({
    task: options.task || task.task,
    done: options.done || task.done,
  });
}
