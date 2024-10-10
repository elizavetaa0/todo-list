import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('ToDo App', () => {
  test('добавление новой задачи', () => {
    render(<App />);
    const input = screen.getByLabelText(/что нужно сделать/i);
    fireEvent.change(input, { target: { value: 'Новая задача' } });
    const addButton = screen.getByText(/добавить задание/i);
    fireEvent.click(addButton);
    expect(screen.getByText('Новая задача')).toBeInTheDocument();
  });

  test('переключение статуса задачи', async () => {
    render(<App />);
    const input = screen.getByLabelText(/что нужно сделать/i);
    fireEvent.change(input, { target: { value: 'Тестовая задача' } });
    const addButton = screen.getByText(/добавить задание/i);
    fireEvent.click(addButton);
    const checkboxes = screen.getAllByRole('checkbox');
    const taskCheckbox = checkboxes[checkboxes.length - 1];
    fireEvent.click(taskCheckbox);
    const taskText = screen.getByText(/Тестовая задача/i);
    expect(taskText.closest('.MuiListItemText-root')).toHaveStyle('text-decoration: line-through');
    fireEvent.click(taskCheckbox);
    expect(taskText.closest('.MuiListItemText-root')).toHaveStyle('text-decoration: none');
  });

  test('удаление задачи', () => {
    render(<App />);
    const input = screen.getByLabelText(/что нужно сделать/i);
    fireEvent.change(input, { target: { value: 'Удаляемая задача' } });
    const addButton = screen.getByText(/добавить задание/i);
    fireEvent.click(addButton);
    const deleteButtons = screen.getAllByRole('button', { name: /удалить задачу/i });
    fireEvent.click(deleteButtons[deleteButtons.length - 1]);
    expect(screen.queryByText('Удаляемая задача')).not.toBeInTheDocument();
  });

  test('сохранение состояния в localStorage', () => {
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    const getItemMock = jest.spyOn(Storage.prototype, 'getItem');
    render(<App />);
    const input = screen.getByLabelText(/что нужно сделать/i);
    fireEvent.change(input, { target: { value: 'Сохраняемая задача' } });
    fireEvent.click(screen.getByText(/добавить задание/i));
    expect(setItemMock).toHaveBeenCalledWith('tasks', expect.any(String));
    expect(getItemMock).toHaveBeenCalledWith('tasks');
  });  
});
