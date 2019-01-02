import { Collection, create as createIdentity } from '@utlime/identity';
import { comparator, create as createSort } from '@utlime/sort';
import { create as createTask, update as updateTask } from '@utlime/task';
import { create, ListTask, mapKey, sortByKey, update, updateKey, updateByIdentity } from '../src';

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
  describe('sortByKey', () => {
    it('should return sorted array', () => {
      const identity = createIdentity({ id: '1' });
      const task = createTask({ task: 'task' });
      const comparable1 = createSort({ weight: 0 });
      const comparable2 = createSort({ weight: 1 });
      const comparable3 = createSort({ weight: 2 });
      const tags = [] as Collection;
      const listTasks = [
        create({ identity, task, comparable: comparable3, tags }),
        create({ identity, task, comparable: comparable2, tags }),
        create({ identity, task, comparable: comparable1, tags }),
        create({ identity, task, comparable: comparable3, tags }),
      ];

      expect(sortByKey(comparator())(listTasks)).toEqual([listTasks[2], listTasks[1], listTasks[0], listTasks[3]]);
    });
  });
  describe('updateByIdentity', () => {
    it('should update if identity is same', () => {
      const identity = createIdentity({ id: '1' });
      const task = createTask({ task: 'task' });
      const comparable = createSort({ weight: 0 });
      const comparable2 = createSort({ weight: 1 });
      const tags = [] as Collection;
      const listTask = create({ identity, task, comparable, tags });
      const up = update({ comparable: comparable2 });

      expect(updateByIdentity(identity)(up)(listTask).comparable).toEqual(comparable2);
    });
    it('should not update if identity is not same', () => {
      const identity = createIdentity({ id: '1' });
      const identity2 = createIdentity({ id: '2' });
      const task = createTask({ task: 'task' });
      const comparable = createSort({ weight: 0 });
      const comparable2 = createSort({ weight: 1 });
      const tags = [] as Collection;
      const listTask = create({ identity, task, comparable, tags });
      const up = update({ comparable: comparable2 });

      expect(updateByIdentity(identity2)(up)(listTask).comparable).toEqual(comparable);
    });
  });
});
