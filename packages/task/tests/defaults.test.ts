import { defaults, TaskStatus } from '../src/index';

describe('todoDefaults', () => {
  it('should be created with task only', () => {
    expect(defaults()({ task: 'todo' })).toMatchObject({
      task: 'todo',
      status: TaskStatus.NotStarted,
    });
  });

  it('should be created with default status', () => {
    expect(defaults({})({ task: 'todo' })).toMatchObject({
      task: 'todo',
      status: TaskStatus.NotStarted,
    });
  });

  it('should be created with done true', () => {
    expect(defaults({ status: TaskStatus.Completed })({ task: 'todo' })).toMatchObject({
      task: 'todo',
      status: TaskStatus.Completed,
    });
  });

  it('should be new object', () => {
    const todo = { task: 'todo', status: TaskStatus.Completed };

    expect(defaults()(todo)).not.toBe(todo);
  });
});
