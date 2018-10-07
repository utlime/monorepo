import { TaskStatus } from '@utlime/task';
import { update } from '../src';

describe('update', () => {
  it('should not update not provided options', () => {
    expect(update()({ task: 'task', id: 'id', status: TaskStatus.NotStarted, weight: 0, tags: [] })).toEqual({
      id: 'id',
      status: TaskStatus.NotStarted,
      tags: [],
      task: 'task',
      weight: 0,
    });
  });
  it('should update by option values', () => {
    expect(
      update({ status: TaskStatus.Blocked, weight: 10, task: 'task2' })({
        task: 'task',
        id: 'id',
        status: TaskStatus.NotStarted,
        weight: 0,
        tags: [],
      })
    ).toEqual({
      id: 'id',
      status: TaskStatus.Blocked,
      tags: [],
      task: 'task2',
      weight: 10,
    });
  });
});
