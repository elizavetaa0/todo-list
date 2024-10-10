import { Button, Checkbox, ListItem, ListItemText } from '@mui/material';
import { TaskItemProps } from './type';
import { Trash2 } from 'lucide-react';

export function TaskItem({ task, toggleTaskStatus, deleteTask }: TaskItemProps) {
  const { id, text, completed } = task;

  return (
    <ListItem>
      <Checkbox 
        checked={completed}
        onChange={() => toggleTaskStatus(id)}
      />
      <ListItemText 
        primary={text}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      />
      <Button color='primary' onClick={() => deleteTask(id)} aria-label='удалить задачу'>
        <Trash2 />
      </Button>
    </ListItem>
  );
}
