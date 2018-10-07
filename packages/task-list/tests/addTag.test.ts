import { TaskStatus } from '@utlime/task';
import { defaults, addTag } from '../src';

describe('addTag', () => {
  it('should add tag', () => {
    expect(addTag([{ id: '1' }])(defaults()({ task: 'task', id: 'id' }))).toEqual({
      id: 'id',
      status: TaskStatus.NotStarted,
      tags: [{ id: '1' }],
      task: 'task',
      weight: 0,
    });
  });
  it('should add multiple tags', () => {
    expect(addTag([{ id: '1' }, { id: '2' }])(defaults()({ task: 'task', id: 'id' }))).toEqual({
      id: 'id',
      status: TaskStatus.NotStarted,
      tags: [{ id: '1' }, { id: '2' }],
      task: 'task',
      weight: 0,
    });
  });
  it('should not add duplicated tags', () => {
    expect(
      [{ task: 'task', id: 'id' }]
        .map(defaults())
        .map(addTag([{ id: '1' }, { id: '2' }]))
        .map(addTag([{ id: '1' }, { id: '2' }, { id: '3' }]))
        .shift()
    ).toEqual({
      id: 'id',
      status: TaskStatus.NotStarted,
      tags: [{ id: '1' }, { id: '2' }, { id: '3' }],
      task: 'task',
      weight: 0,
    });
  });
});
