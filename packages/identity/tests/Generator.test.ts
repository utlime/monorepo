import { create, generate } from '../src';
import { collection } from './helpers';

describe('Generator', () => {
  describe('generate', () => {
    it('should return new identity for first time', () => {
      expect(generate()).toEqual(create({ id: '0' }));
    });
    it('should return new identity', () => {
      expect(generate(collection('3,2,5,7,1,9,12'))).toEqual(create({ id: '13' }));
    });
    it('should return new identity when it is not number', () => {
      expect(generate(collection('!,?'))).toEqual(create({ id: '1' }));
    });
  });
});
