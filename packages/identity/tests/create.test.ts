import { create } from '../src';

describe('create', () => {
  it('should return identity with not empty id', () => {
    expect(create()().id.length).toBeGreaterThan(0);
  });
  it('should return id from generator', () => {
    expect(create(() => '1')().id).toBe('1');
  });
  it('should call generator twice if id already exists', () => {
    const generator = jest
      .fn()
      .mockReturnValueOnce('1')
      .mockReturnValueOnce('1')
      .mockReturnValueOnce('2');

    create(generator)([create(generator)()]);

    expect(generator.mock.calls.length).toBe(3);
  });
});
