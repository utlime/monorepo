import { Collection, create as createIdentity } from '@utlime/identity';
import { create as createSort } from '@utlime/sort';
import { create as createTask, update as updateTask } from '@utlime/task';
import { create, ListTask, mapKey, update, updateKey } from '../src';

describe('ListTask', () => {
  describe('create', () => {
    it('should return new object without tags', () => {
      const identity = createIdentity({ id: '1' });
      const task = createTask({ task: 'task' });
      const comparable = createSort({ weight: 0 });

      expect(create({ identity, task, comparable })).toEqual({ identity, task, comparable, tags: [] } as ListTask);
    });
    it('should return new object', () => {
      const identity = createIdentity({ id: '1' });
      const task = createTask({ task: 'task' });
      const comparable = createSort({ weight: 0 });
      const tags = [createIdentity({ id: '2' })];

      expect(create({ identity, task, comparable, tags })).toEqual({ identity, task, comparable, tags } as ListTask);
    });
  });
  describe('update', () => {
    it('should return equal object', () => {
      const identity = createIdentity({ id: '1' });
      const task = createTask({ task: 'task' });
      const comparable = createSort({ weight: 0 });
      const tags = [createIdentity({ id: '2' })];

      expect(update()(create({ identity, task, comparable, tags }))).toEqual({
        identity,
        task,
        comparable,
        tags,
      } as ListTask);
    });
    it('should update and return new object', () => {
      const identity = createIdentity({ id: '1' });
      const task = createTask({ task: 'task' });
      const comparable = createSort({ weight: 0 });
      const tags = [createIdentity({ id: '2' })];

      const identity2 = createIdentity({ id: '3' });
      const task2 = createTask({ task: 'task2' });
      const comparable2 = createSort({ weight: 2 });
      const tags2 = [createIdentity({ id: '4' })];

      expect(
        update({ identity, task, comparable, tags })(
          create({ identity: identity2, task: task2, comparable: comparable2, tags: tags2 })
        )
      ).toEqual({ identity, task, comparable, tags } as ListTask);
    });
  });
  describe('updateKey', () => {
    it('should update key', () => {
      const identity = createIdentity({ id: '1' });
      const task = createTask({ task: 'task' });
      const comparable = createSort({ weight: 0 });
      const tags = [] as Collection;
      const listTask = create({ identity, task, comparable, tags });

      expect(updateKey('task')(updateTask({ task: 'task2' }))(listTask)).toEqual(
        update({ task: updateTask({ task: 'task2' })(task) })(listTask)
      );
    });
  });
  describe('mapKey', () => {
    it('should return key value', () => {
      const identity = createIdentity({ id: '1' });
      const task = createTask({ task: 'task' });
      const comparable = createSort({ weight: 0 });
      const tags = [] as Collection;
      const listTask = create({ identity, task, comparable, tags });

      expect(mapKey('task')(task => task.task)(listTask)).toEqual('task');
    });
  });
});
