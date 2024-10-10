import { Task } from '../../type';

export interface TaskItemProps {
  task: Task;
  toggleTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
}
