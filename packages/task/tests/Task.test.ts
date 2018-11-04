import { create, isStatus, TaskStatus, update } from '../src';

describe('Task', () => {
  describe('create', () => {
    it('should be created with default status', () => {
      expect(create({ task: 'todo' })).toMatchObject({
        task: 'todo',
        status: TaskStatus.NotStarted,
      });
    });
    it('should be created new task', () => {
      expect(create({ task: 'todo', status: TaskStatus.Blocked })).toMatchObject({
        task: 'todo',
        status: TaskStatus.Blocked,
      });
    });
  });
  describe('update', () => {
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
  describe('isStatus', () => {
    it('should return true if status matched', () => {
      expect(isStatus([TaskStatus.NotStarted])({ task: 'todo', status: TaskStatus.NotStarted })).toBeTruthy();
    });
    it('should return false if status is not matched', () => {
      expect(isStatus([TaskStatus.NotStarted])({ task: 'todo', status: TaskStatus.Completed })).toBeFalsy();
    });
  });
});
