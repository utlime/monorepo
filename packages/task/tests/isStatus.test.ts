import { isStatus, Status } from '../src/index';

describe('isStatus', () => {
  it('should be truthy if status matched', () => {
    expect(isStatus(Status.NotStarted)({ task: 'todo', status: Status.NotStarted })).toBeTruthy();
  });

  it('should be falsy if status is not matched', () => {
    expect(isStatus(Status.NotStarted)({ task: 'todo', status: Status.Completed })).toBeFalsy();
  });
});
