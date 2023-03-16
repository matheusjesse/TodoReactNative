import * as React from 'react';
import {TodoContextType, TodoRegisterType} from '../@types/types.todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeColor, setThemeColor] = React.useState(true);
  const [todoRegister, setTodoRegister] = React.useState(
    {} as TodoRegisterType,
  );

  const updateTheme = (theme: boolean) => {
    setThemeColor(theme);
  };

  const loadThemeColor = () => {
    return themeColor;
  };

  const registerTodo = (data: TodoRegisterType) => {
    setTodoRegister(data);
  };

  const loadTodo = (): TodoRegisterType => {
    return todoRegister;
  };

  return (
    <TodoContext.Provider
      value={{
        updateTheme,
        loadThemeColor,
        registerTodo,
        loadTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
