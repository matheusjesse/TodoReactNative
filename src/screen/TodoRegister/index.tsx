import React from 'react';
import {Text} from 'react-native';
// import {TodoContextType} from '../../@types/types.todo';
// import {TodoContext} from '../../context/todoContext';
import RegisterContainer from './style';

function TodoRegister(): JSX.Element {
  // const {registerTodo, loadTodo} = React.useContext(
  //   TodoContext,
  // ) as TodoContextType;
  return (
    <RegisterContainer>
      <Text>ToDos</Text>
    </RegisterContainer>
  );
}

export default TodoRegister;
