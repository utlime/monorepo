import { isStatus, Status } from '../src/index';

describe('isStatus', () => {
  it('should be truthy if status matched', () => {
    expect(isStatus(Status.Unfinished)({ task: 'todo', status: Status.Unfinished })).toBeTruthy();
  });

  it('should be falsy if status is not matched', () => {
    expect(isStatus(Status.Unfinished)({ task: 'todo', status: Status.Done })).toBeFalsy();
  });
});
