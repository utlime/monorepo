import { defaults, addTag, filterByTags } from '../src';

describe('filterByTags', () => {
  it('should filter by one tag', () => {
    expect(
      [{ task: 'task', id: 'id' }, { task: 'task', id: 'id2' }]
        .map(defaults())
        .map(addTag([{ id: '1' }, { id: '2' }]))
        .concat(
          [{ task: 'task', id: 'id3' }]
            .map(defaults())
            .map(addTag([{ id: '2' }]))
        )
        .filter(filterByTags()([{ id: '2' }]))
        .length
    ).toEqual(3);
  });
  it('should filter by few tags', () => {
    expect(
      [{ task: 'task', id: 'id' }, { task: 'task', id: 'id2' }]
        .map(defaults())
        .map(addTag([{ id: '1' }, { id: '2' }]))
        .concat(
          [{ task: 'task', id: 'id3' }, { task: 'task', id: 'id4' }]
            .map(defaults())
            .map(addTag([{ id: '2' }]))
        )
        .filter(filterByTags(false)([{ id: '1' }, { id: '2' }]))
        .length
    ).toEqual(2);
  });
});
