import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TaskListProps = {
  children: ReactNode;
};

type TaskListItemProps = {
  children: ReactNode;
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

export function TaskList(props: TaskListProps) {
  return <TaskListStyle>{props.children}</TaskListStyle>;
}

export function TaskListItem(props: TaskListItemProps) {
  return <TaskListItemStyle>{props.children}</TaskListItemStyle>;
}
