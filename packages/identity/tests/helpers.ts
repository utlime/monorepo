import { Identity } from '../src';

export function collection(ids: string): Identity[] {
  return ids.split(',').map(id => ({ id }));
}
