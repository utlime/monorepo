import { TaskStatus, update } from '../src/index';

describe('todoUpdate', () => {
  it('should update task field', () => {
    expect(update({ task: 'todo2' })({ task: 'todo', status: TaskStatus.NotStarted })).toMatchObject({
      task: 'todo2',
    });
  });

  it('should update done field', () => {
    expect(update({ status: TaskStatus.Completed })({ task: 'todo', status: TaskStatus.NotStarted })).toMatchObject({
      status: TaskStatus.Completed,
    });
  });

  it('should update only provided field', () => {
    expect(update({ status: TaskStatus.Completed })({ task: 'todo', status: TaskStatus.NotStarted })).toMatchObject({
      task: 'todo',
      status: TaskStatus.Completed,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', status: TaskStatus.Completed };

    expect(update()(todo)).not.toBe(todo);
  });
});
