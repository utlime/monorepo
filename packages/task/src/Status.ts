/**
 *  Available statuses.
 *
 *  It represents the life cycle of tasks, e.g. when task was created, it will in NotStarted status
 *
 *  Standard flow: NotStarted [ -> InProgress [ <-> Paused ] ] -> Completed or Canceled
 *  @todo create validation for status flow
 */
export enum Status {
  /**
   *  This is the default setting for when a task is added.
   */
  NotStarted = 'not-started',

  /**
   *  This indicates that the task has been started.
   */
  InProgress = 'in-progress',

  /**
   *  This indicates that the task has been started and then paused.
   *
   *  This should be used after InProgress status
   */
  Paused = 'paused',

  /**
   *  This indicates that the task has been finished.
   */
  Completed = 'completed',

  /**
   *  This indicates that the task has been canceled.
   */
  Canceled = 'canceled',
}
