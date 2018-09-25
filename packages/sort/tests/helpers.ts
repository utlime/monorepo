import { Sortable } from '../src';

export function collection(weights: string): Sortable[] {
  return weights
    .split(',')
    .map(Number)
    .map(order => ({ order }));
}
