import { List } from '@mui/material';
import { TaskListProps } from './type';
import { TaskItem } from '../TaskItem';

export function TaskList ({ tasks, toggleTaskStatus, deleteTask }: TaskListProps) {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </List>
  );
};
