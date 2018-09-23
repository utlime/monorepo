import { Weightable } from '../src';

export function collection(weights: string): Weightable[] {
  return weights
    .split(',')
    .map(Number)
    .map(weight => ({ weight }));
}
