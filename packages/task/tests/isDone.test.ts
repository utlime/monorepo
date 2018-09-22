import { isDone } from '../src/index';

describe('FTodoIsDone', () => {
  it('should be truthy if task is done', () => {
    expect(isDone(false)({ task: 'todo', done: false })).toBeTruthy();
  });

  it('should be falsy if task is not done', () => {
    expect(isDone(true)({ task: 'todo', done: false })).toBeFalsy();
  });

  it('should be truthy if task is done', () => {
    expect(isDone(true)({ task: 'todo', done: true })).toBeTruthy();
  });

  it('should be falsy if task is not done', () => {
    expect(isDone(false)({ task: 'todo', done: true })).toBeFalsy();
  });
});
