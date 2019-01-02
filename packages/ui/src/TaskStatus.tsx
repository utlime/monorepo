import React from 'react';
import styled from 'styled-components';

type TaskStatusProps = {
  done: boolean;
  onClick?: () => void;
};

const TaskStatusStyle = styled.span`
  color: ${(props: TaskStatusProps) => (!props.done ? 'grey' : 'inherit')};
  cursor: pointer;

  &:hover {
    color: inherit;
  }
`;

export function TaskStatus(props: TaskStatusProps) {
  return (
    <TaskStatusStyle {...props} onClick={props.onClick}>
      {props.done ? '☑︎' : '☐'}
    </TaskStatusStyle>
  );
}
