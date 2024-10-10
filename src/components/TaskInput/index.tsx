import { useState } from 'react';
import { TaskInputProps } from './type';
import { Button, TextField } from '@mui/material';

export function TaskInput({ addTask }: TaskInputProps) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return(
    <div>
      <TextField
        fullWidth
        label='Что нужно сделать?'
        variant='outlined'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={handleAddTask}
        style={{ marginTop: '10px' }}
      >
        Добавить задание
      </Button>
    </div>
  )
}