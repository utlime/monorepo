import { TaskStatus } from '@utlime/task';
import { defaults, addTag, removeTag } from '../src';

describe('removeTag', () => {
  it('should remove tag', () => {
    expect(
      [{ task: 'task', id: 'id' }]
        .map(defaults())
        .map(addTag([{ id: '1' }]))
        .map(removeTag([{ id: '1' }]))
        .shift()
    ).toEqual({
      id: 'id',
      status: TaskStatus.NotStarted,
      tags: [],
      task: 'task',
      weight: 0,
    });
  });
  it('should remove multiple tags', () => {
    expect(
      [{ task: 'task', id: 'id' }]
        .map(defaults())
        .map(addTag([{ id: '1' }, { id: '2' }]))
        .map(removeTag([{ id: '1' }, { id: '2' }]))
        .shift()
    ).toEqual({
      id: 'id',
      status: TaskStatus.NotStarted,
      tags: [],
      task: 'task',
      weight: 0,
    });
  });
});
