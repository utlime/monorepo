import React from 'react';
import { storiesOf } from '@storybook/react';
import { TaskForm } from '../../src';

storiesOf('TaskForm', module).add('default', () => <TaskForm task={'task'} onSubmit={newTask => alert(newTask)} />);
