import { storiesOf } from '@storybook/react';
import { Task, TaskList, TaskStatus } from '../../src';
import React from 'react';

const tasks = [
  { id: '1', task: 'task 1', done: false },
  { id: '2', task: 'task 2', done: true },
  { id: '3', task: 'task 3', done: false },
];

storiesOf('TaskList', module)
  .add('default', () => <TaskList tasks={tasks} />)
  .add('custom', () => (
    <TaskList tasks={tasks}>
      {task => (
        <React.Fragment>
          <TaskStatus done={task.done} />
          <Task task={task.task} />
        </React.Fragment>
      )}
    </TaskList>
  ));
