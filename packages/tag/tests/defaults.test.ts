import { defaults } from '../src';

describe('todoDefaults', () => {
  it('should be created with tag name only', () => {
    expect(defaults()({ name: 'tag' })).toMatchObject({
      name: 'tag',
      color: '#FFF',
    });
  });

  it('should be created with tag name only', () => {
    expect(defaults({})({ name: 'tag' })).toMatchObject({
      name: 'tag',
      color: '#FFF',
    });
  });

  it('should be created with default color', () => {
    expect(defaults({ color: '#000' })({ name: 'tag' })).toMatchObject({
      name: 'tag',
      color: '#000',
    });
  });

  it('should not update color', () => {
    expect(defaults({ color: '#F00' })({ name: 'tag', color: '#000' })).toMatchObject({
      name: 'tag',
      color: '#000',
    });
  });
});
