import { Task } from '../../type'; 

export interface TaskListProps {
  tasks: Task[];
  toggleTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
}
