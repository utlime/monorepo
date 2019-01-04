import React from 'react';

interface TaskProps {
  task: string;
}

export function Task<T extends TaskProps>(props: T) {
  const { task, ...rest } = props;

  return <span {...rest}>{task}</span>;
}
