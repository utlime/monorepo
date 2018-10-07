import { TaskStatus } from '@utlime/task';
import { defaults, filterByStatus, update } from '../src';

describe('filterByTags', () => {
  it('should filter by one tag', () => {
    expect(
      [{ task: 'task', id: 'id' }, { task: 'task', id: 'id2' }]
        .map(defaults())
        .concat(
          [{ task: 'task', id: 'id3' }]
            .map(defaults())
            .map(update({ status: TaskStatus.Blocked }))
        )
        .filter(filterByStatus([TaskStatus.Blocked]))
        .length
    ).toEqual(1);
  });
});
