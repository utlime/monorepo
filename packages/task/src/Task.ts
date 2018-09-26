import { TaskStatus } from './TaskStatus';

/**
 * This contains task and current task status
 */
export interface Task {
  task: string;
  status: TaskStatus;
}
