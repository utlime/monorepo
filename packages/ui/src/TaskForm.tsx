import React, { useState } from 'react';

interface TaskFormProps {
  task: string;
  submit?: (newTask: string) => void;
}

const defaultProps: Required<Pick<TaskFormProps, 'submit'>> = {
  submit: () => undefined,
};

export function TaskForm<T extends TaskFormProps>(props: T) {
  const [task, setTask] = useState(props.task);
  const { submit = defaultProps.submit } = props;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submit(task);
      }}
    >
      <input value={task} onChange={e => setTask(e.target.value)} />
    </form>
  );
}
