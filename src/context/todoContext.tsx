import * as React from 'react';
import {TodoContextType} from '../@types/types.todo';

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeColor, setThemeColor] = React.useState(true);

  const updateTheme = (theme: boolean) => {
    setThemeColor(theme);
  };

  const loadThemeColor = () => {
    return themeColor;
  };

  return (
    <TodoContext.Provider value={{updateTheme, loadThemeColor}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
