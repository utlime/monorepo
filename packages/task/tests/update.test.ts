import { Status, update } from '../src/index';

describe('todoUpdate', () => {
  it('should update task field', () => {
    expect(update({ task: 'todo2' })({ task: 'todo', status: Status.Unfinished })).toMatchObject({
      task: 'todo2',
    });
  });

  it('should update done field', () => {
    expect(update({ status: Status.Done })({ task: 'todo', status: Status.Unfinished })).toMatchObject({ status: Status.Done });
  });

  it('should update only provided field', () => {
    expect(update({ status: Status.Done })({ task: 'todo', status: Status.Unfinished })).toMatchObject({
      task: 'todo',
      status: Status.Done,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', status: Status.Done };

    expect(update()(todo)).not.toBe(todo);
  });
});
