import { update } from '../src';

describe('tagUpdate', () => {
  it('should update name field', () => {
    expect(update({ name: 'tag2' })({ name: 'tag', color: '' })).toMatchObject({ name: 'tag2' });
  });

  it('should update color field', () => {
    expect(update({ color: 'true' })({ name: 'tag', color: 'false' })).toMatchObject({
      color: 'true',
    });
  });

  it('should update only provided field', () => {
    expect(update({ color: 'true' })({ name: 'tag', color: 'false' })).toMatchObject({
      color: 'true',
      name: 'tag',
    });
  });

  it('should be new object', () => {
    const tag = { name: 'tag', color: '' };

    expect(update()(tag)).not.toBe(tag);
  });
});
