import { update } from '../src/index';

describe('todoUpdate', () => {
  it('should update task field', () => {
    expect(update({ task: 'todo2' })({ task: 'todo', done: false })).toMatchObject({
      task: 'todo2',
    });
  });

  it('should update done field', () => {
    expect(update({ done: true })({ task: 'todo', done: false })).toMatchObject({ done: true });
  });

  it('should update only provided field', () => {
    expect(update({ done: true })({ task: 'todo', done: false })).toMatchObject({
      task: 'todo',
      done: true,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', done: false };

    expect(update()(todo)).not.toBe(todo);
  });
});
