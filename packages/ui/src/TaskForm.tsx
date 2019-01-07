import React, { useState } from 'react';

interface TaskFormProps {
  task: string;
  onSubmit?: (newTask: string) => void;
}

const defaultProps: Required<Pick<TaskFormProps, 'onSubmit'>> = {
  onSubmit: () => undefined,
};

export function TaskForm<T extends TaskFormProps>(props: T) {
  const [task, setTask] = useState(props.task);
  const { onSubmit = defaultProps.onSubmit } = props;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(task);
      }}
    >
      <input value={task} onChange={e => setTask(e.target.value)} />
    </form>
  );
}
