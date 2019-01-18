import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface TaskListTask {
  id: string;
  task: string;
  done: boolean;
  edit: boolean;
}

interface TaskListProps {
  children?: (task: TaskListTask) => ReactNode;
  tasks: TaskListTask[];
}

const defaultProps: Required<Pick<TaskListProps, 'children'>> = {
  children: task => `${task.task} (${task.done ? 'done' : 'not done'})`,
};

const TaskListStyle = styled.ul`
  list-style: none;
  padding: 4px;
  margin: 0;
`;

const TaskListItemStyle = styled.li`
  padding: 4px;

  & + & {
    border-top: 1px solid gray;
  }
`;

export function TaskList<T extends TaskListProps>(props: T) {
  const { children = defaultProps.children, tasks } = props;

  return (
    <TaskListStyle>
      {tasks.map(task => (
        <TaskListItemStyle key={task.id}>{children(task)}</TaskListItemStyle>
      ))}
    </TaskListStyle>
  );
}
