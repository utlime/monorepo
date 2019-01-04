import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Task {
  id: string;
  task: string;
  done: boolean;
}

interface TaskListProps {
  children?: (task: Task) => ReactNode;
  tasks: Task[];
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
