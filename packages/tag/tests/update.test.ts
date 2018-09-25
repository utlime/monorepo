import { update } from '../src';

describe('tagUpdate', () => {
  it('should update tag field', () => {
    expect(update({ tag: 'tag2' })({ tag: 'tag', color: '' })).toMatchObject({ tag: 'tag2' });
  });

  it('should update color field', () => {
    expect(update({ color: 'true' })({ tag: 'tag', color: 'false' })).toMatchObject({
      color: 'true',
    });
  });

  it('should update only provided field', () => {
    expect(update({ color: 'true' })({ tag: 'tag', color: 'false' })).toMatchObject({
      color: 'true',
      tag: 'tag',
    });
  });

  it('should be new object', () => {
    const tag = { tag: 'tag', color: '' };

    expect(update()(tag)).not.toBe(tag);
  });
});
