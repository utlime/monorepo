import { Task, TaskForm, TaskList, TaskListTask, TaskStatus } from '@utlime/ui';
import React, { useReducer } from 'react';

enum Type {
  INIT,
  SUBMIT,
  TOGGLE,
}

const reducer = (state: TaskListTask[], action: { type: Type; task?: Partial<TaskListTask> }) => {
  let newState = state;

  switch (action.type) {
    case Type.INIT:
      newState = [{ id: '1', task: '', done: false, edit: true }];
      break;
    case Type.TOGGLE:
      newState = state.map(task => {
        if (action.task && action.task.id === task.id) {
          return { ...task, done: !task.done };
        }

        return task;
      });

      break;
    case Type.SUBMIT:
      newState = state.map(task => {
        if (action.task && task.id === action.task.id) {
          return { ...task, ...action.task, edit: false };
        }

        return task;
      });

      if (newState.length > 0) {
        const last = newState[newState.length - 1];

        if (!last.edit) {
          newState.push({ id: String(newState.length + 1), task: '', done: false, edit: true });
        }
      }

      break;
  }

  return newState;
};

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, [], { type: Type.INIT });

  return (
    <div>
      <TaskList tasks={tasks}>
        {task => (
          <React.Fragment>
            {task.edit ? (
              <TaskForm
                task={task.task}
                onSubmit={newTask => dispatch({ type: Type.SUBMIT, task: { id: task.id, task: newTask } })}
              />
            ) : (
              <React.Fragment>
                <TaskStatus done={task.done} onClick={() => dispatch({ type: Type.TOGGLE, task: { id: task.id } })} />
                <Task task={task.task} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </TaskList>
    </div>
  );
};

export default App;
