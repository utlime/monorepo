import React from 'react';
import { storiesOf } from '@storybook/react';
import { Task } from '../../src';

storiesOf('Task', module).add('Task', () => <Task task={'task'} />);
