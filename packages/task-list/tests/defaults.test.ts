import { TaskStatus } from '@utlime/task';
import { defaults } from '../src';

describe('defaults', () => {
  it('should return default values', () => {
    expect(defaults()({ task: 'task', id: 'id' })).toEqual({
      id: 'id',
      status: TaskStatus.NotStarted,
      tags: [],
      task: 'task',
      weight: 0,
    });
  });
  it('should return option values', () => {
    expect(defaults({ status: TaskStatus.Blocked, weight: 1 })({ task: 'task', id: 'id' })).toEqual({
      id: 'id',
      status: TaskStatus.Blocked,
      tags: [],
      task: 'task',
      weight: 1,
    });
  });
});
