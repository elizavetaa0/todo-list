import { useEffect, useState } from 'react';
import { TaskFilters, TaskInput, TaskList } from './components';
import { Container, Typography } from '@mui/material';
import { Task } from './type';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    } else {
      return true;
    }
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        ToDo List
      </Typography>
      <TaskInput addTask={addTask} />
      <TaskFilters filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        toggleTaskStatus={toggleTaskStatus}
        deleteTask={deleteTask}
      />
    </Container>
  );
}

export default App;
