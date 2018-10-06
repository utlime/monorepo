import { Comparable } from '../src';

export function collection(weights: string): Comparable[] {
  return weights
    .split(',')
    .map(Number)
    .map(weight => ({ weight }));
}
