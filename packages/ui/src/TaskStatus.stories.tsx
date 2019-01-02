import React from 'react';
import { storiesOf } from '@storybook/react';
import { TaskStatus } from '../src';

storiesOf('TaskStatus', module)
  .add('done', () => <TaskStatus done={true} />)
  .add('not done', () => <TaskStatus done={false} />);
