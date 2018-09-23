import { defaults, Status } from '../src/index';

describe('todoDefaults', () => {
  it('should be created with task only', () => {
    expect(defaults()({ task: 'todo' })).toMatchObject({
      task: 'todo',
      status: Status.Unfinished,
    });
  });

  it('should be created with done true', () => {
    expect(defaults({ status: Status.Done })({ task: 'todo' })).toMatchObject({
      task: 'todo',
      status: Status.Done,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', status: Status.Done };

    expect(defaults({})(todo)).not.toBe(todo);
  });
});
