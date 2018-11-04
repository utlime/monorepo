import { Task } from '@utlime/task';
import { Collection, Identity } from '@utlime/identity';
import { Comparable } from '@utlime/sort';

/**
 * Task list interface
 */
export interface ListTask {
  readonly task: Task;
  readonly identity: Identity;
  readonly comparable: Comparable;
  readonly tags: Collection;
}

/**
 * Return new list task
 */
export function create(options: {
  task: Task;
  identity: Identity;
  comparable: Comparable;
  tags?: Collection;
}): ListTask {
  return {
    task: options.task,
    identity: options.identity,
    comparable: options.comparable,
    tags: options.tags || [],
  };
}

/**
 * Update and return new list task
 */
export function update(options: Partial<ListTask> = {}): (listTask: ListTask) => ListTask {
  return listTask => create({
    task: options.task || listTask.task,
    identity: options.identity || listTask.identity,
    comparable: options.comparable || listTask.comparable,
    tags: options.tags || listTask.tags,
  });
}

/**
 * Update key of list task
 */
export function updateKey<K extends keyof ListTask>(
  key: K
): (func: ((keyValue: ListTask[K]) => ListTask[K])) => (listTask: ListTask) => ListTask {
  return func => listTask => update({ [key]: func(listTask[key]) })(listTask);
}

/**
 * Map task list key value
 */
export function mapKey<K extends keyof ListTask, U>(
  key: K
): (func: ((keyValue: ListTask[K]) => U)) => (listTask: ListTask) => U {
  return func => listTask => func(listTask[key]);
}
