import { storiesOf } from '@storybook/react';
import { TaskList, TaskListItem } from './TaskList';
import React from 'react';

storiesOf('TaskList', module).add('default', () => (
  <TaskList>
    {[1, 2, 3].map(i => (
      <TaskListItem key={i}>{`task item ${i}`}</TaskListItem>
    ))}
  </TaskList>
));
