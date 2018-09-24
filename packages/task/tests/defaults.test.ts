import { defaults, Status } from '../src/index';

describe('todoDefaults', () => {
  it('should be created with task only', () => {
    expect(defaults()({ task: 'todo' })).toMatchObject({
      task: 'todo',
      status: Status.NotStarted,
    });
  });

  it('should be created with default status', () => {
    expect(defaults({})({ task: 'todo' })).toMatchObject({
      task: 'todo',
      status: Status.NotStarted,
    });
  });

  it('should be created with done true', () => {
    expect(defaults({ status: Status.Completed })({ task: 'todo' })).toMatchObject({
      task: 'todo',
      status: Status.Completed,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', status: Status.Completed };

    expect(defaults()(todo)).not.toBe(todo);
  });
});
