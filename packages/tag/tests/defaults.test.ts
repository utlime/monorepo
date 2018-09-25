import { defaults } from '../src';

describe('todoDefaults', () => {
  it('should be created with tag tag only', () => {
    expect(defaults()({ tag: 'tag' })).toMatchObject({
      tag: 'tag',
      color: '#FFF',
    });
  });

  it('should be created with tag tag only', () => {
    expect(defaults({})({ tag: 'tag' })).toMatchObject({
      tag: 'tag',
      color: '#FFF',
    });
  });

  it('should be created with default color', () => {
    expect(defaults({ color: '#000' })({ tag: 'tag' })).toMatchObject({
      tag: 'tag',
      color: '#000',
    });
  });

  it('should not update color', () => {
    expect(defaults({ color: '#F00' })({ tag: 'tag', color: '#000' })).toMatchObject({
      tag: 'tag',
      color: '#000',
    });
  });
});
