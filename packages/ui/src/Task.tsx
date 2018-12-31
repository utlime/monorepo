import { Task } from '@utlime/task';
import React from 'react'

export function TaskComponent(props: { task: Task }) {
  return (<span>{props.task.task} ({props.task.status})</span>);
}
