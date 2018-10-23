import { TaskStatus } from './TaskStatus';

/**
 * This contains task and current task status
 */
export interface Task {
  readonly task: string;
  readonly status: TaskStatus;
}
