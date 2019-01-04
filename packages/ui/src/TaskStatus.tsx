import React from 'react';
import styled from 'styled-components';

interface TaskStatusProps {
  done: boolean;
}

const TaskStatusStyle = styled.span`
  color: ${(props: TaskStatusProps) => (!props.done ? 'grey' : 'inherit')};
  cursor: pointer;

  &:hover {
    color: inherit;
  }
`;

export function TaskStatus<T extends TaskStatusProps>(props: T) {
  return <TaskStatusStyle {...props}>{props.done ? '☑︎' : '☐'}</TaskStatusStyle>;
}
