import { create, update } from '../src';

describe('Tag', () => {
  describe('create', () => {
    it('should return new tag', () => {
      expect(create({ tag: 'tag', color: 'red' })).toMatchObject({
        tag: 'tag',
        color: 'red',
      });
    });
    it('should return new tag with default color', () => {
      expect(create({ tag: 'tag' })).toMatchObject({
        tag: 'tag',
        color: '#FFF',
      });
    });
  });
  describe('update', () => {
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
    it('should return be new object', () => {
      const tag = { tag: 'tag', color: '' };
      expect(update()(tag)).not.toBe(tag);
    });
  });
});
