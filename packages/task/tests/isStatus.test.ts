import { isStatus, TaskStatus } from '../src/index';

describe('isStatus', () => {
  it('should be truthy if status matched', () => {
    expect(isStatus(TaskStatus.NotStarted)({ task: 'todo', status: TaskStatus.NotStarted })).toBeTruthy();
  });

  it('should be falsy if status is not matched', () => {
    expect(isStatus(TaskStatus.NotStarted)({ task: 'todo', status: TaskStatus.Completed })).toBeFalsy();
  });
});
