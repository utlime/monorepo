import { comparator as sortComparator, Comparable, SortOrder } from '@utlime/sort';
import { Task, TaskStatus } from '@utlime/task';

type StatusWeight = { [key in TaskStatus]: Comparable };

const defaults: StatusWeight = {
  [TaskStatus.InProgress]: { weight: 0 },
  [TaskStatus.Paused]: { weight: 1 },
  [TaskStatus.NotStarted]: { weight: 2 },
  [TaskStatus.Blocked]: { weight: 3 },
  [TaskStatus.Completed]: { weight: 4 },
  [TaskStatus.Canceled]: { weight: 4 },
};

export function comporatorByStatus(statuses: StatusWeight = defaults): (a: Task, b: Task) => number {
  const cmp = sortComparator(SortOrder.ASC);

  return (a, b) => cmp(statuses[a.status], statuses[b.status]);
}
