import { Status, update } from '../src/index';

describe('todoUpdate', () => {
  it('should update task field', () => {
    expect(update({ task: 'todo2' })({ task: 'todo', status: Status.NotStarted })).toMatchObject({
      task: 'todo2',
    });
  });

  it('should update done field', () => {
    expect(update({ status: Status.Completed })({ task: 'todo', status: Status.NotStarted })).toMatchObject({ status: Status.Completed });
  });

  it('should update only provided field', () => {
    expect(update({ status: Status.Completed })({ task: 'todo', status: Status.NotStarted })).toMatchObject({
      task: 'todo',
      status: Status.Completed,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', status: Status.Completed };

    expect(update()(todo)).not.toBe(todo);
  });
});
