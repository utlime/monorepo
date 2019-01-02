import { create as createTag } from '@utlime/tag';
import { create as createIdentity } from '@utlime/identity';
import { createListTag, updateListTag, ListTag } from '../src';

describe('ListTag', () => {
  describe('createListTag', () => {
    it('should return new object', () => {
      const identity = createIdentity({ id: '1' });
      const tag = createTag({ tag: 'tag' });

      expect(createListTag({ identity, tag })).toEqual({ identity, tag } as ListTag);
    });
  });
  describe('updateListTag', () => {
    it('should return equal object', () => {
      const identity = createIdentity({ id: '1' });
      const tag = createTag({ tag: 'tag' });

      expect(updateListTag()(createListTag({ identity, tag }))).toEqual({ identity, tag } as ListTag);
    });
    it('should update and return new object', () => {
      const identity = createIdentity({ id: '1' });
      const tag = createTag({ tag: 'tag' });
      const identity2 = createIdentity({ id: '2' });
      const tag2 = createTag({ tag: 'tag2' });

      expect(updateListTag({ identity, tag })(createListTag({ identity: identity2, tag: tag2 }))).toEqual({
        identity,
        tag,
      } as ListTag);
    });
  });
});
