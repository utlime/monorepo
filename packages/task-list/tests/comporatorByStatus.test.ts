import { TaskStatus } from '@utlime/task';
import { comparatorByStatus } from '../src';

describe('comparatorByStatus', () => {
  it('should compare by default statuses', () => {
    expect(
      comparatorByStatus()(
        { status: TaskStatus.Blocked, task: 'task1' },
        { status: TaskStatus.InProgress, task: 'task2' }
      )
    ).toBeGreaterThan(0);
  });
  it('should compare by provided statuses', () => {
    expect(
      comparatorByStatus({
        [TaskStatus.InProgress]: { weight: 99 },
        [TaskStatus.Paused]: { weight: 1 },
        [TaskStatus.NotStarted]: { weight: 2 },
        [TaskStatus.Blocked]: { weight: 3 },
        [TaskStatus.Completed]: { weight: 4 },
        [TaskStatus.Canceled]: { weight: 4 },
      })({ status: TaskStatus.Blocked, task: 'task1' }, { status: TaskStatus.InProgress, task: 'task2' })
    ).toBeLessThan(0);
  });
});
