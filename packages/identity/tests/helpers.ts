import { create, Identity } from '../src';

export function collection(ids: string = ''): Identity[] {
  return ids
    .split(',')
    .filter(v => v !== '')
    .map(id => create({ id }));
}
