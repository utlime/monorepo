import { Collection } from '../src';

export function collection(weights: string): Collection {
  return weights
    .split(',')
    .map(Number)
    .map(weight => ({ weight }));
}
