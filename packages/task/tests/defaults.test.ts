import { defaults } from '../src/index';

describe('todoDefaults', () => {
  it('should be created with task only', () => {
    expect(defaults()({ task: 'todo' })).toMatchObject({
      task: 'todo',
      done: false,
    });
  });

  it('should be created with done true', () => {
    expect(defaults({ done: true })({ task: 'todo' })).toMatchObject({
      task: 'todo',
      done: true,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', done: false };

    expect(defaults({})(todo)).not.toBe(todo);
  });
});
