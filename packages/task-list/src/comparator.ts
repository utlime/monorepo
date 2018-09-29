import { comparator as sortComparator, Sortable, SortOrder } from '@utlime/sort';
import { TaskStatus } from '@utlime/task';
import { ListTask } from './ListTask';

const comparatorByOrder = sortComparator(SortOrder.ASC);

function statusToSortable(status: TaskStatus): Sortable {
  switch (status) {
    case TaskStatus.Canceled:
    case TaskStatus.Completed:
      return { order: 4 };
    case TaskStatus.Blocked:
      return { order: 3 };
    case TaskStatus.NotStarted:
      return { order: 2 };
    case TaskStatus.Paused:
      return { order: 1 };
    case TaskStatus.InProgress:
    default:
      return { order: 0 };
  }
}

export function comparator(a: ListTask, b: ListTask): number {
  return comparatorByOrder(statusToSortable(a.status), statusToSortable(b.status))
    || comparatorByOrder(a, b);
}
