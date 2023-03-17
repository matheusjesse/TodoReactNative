import React from 'react';
import {Text} from 'react-native';
import TodoForm from '../../components/TodoForm';
import RegisterContainer from './style';

function TodoRegister(): JSX.Element {
  return (
    <RegisterContainer>
      <Text>ToDos</Text>
      <TodoForm />
    </RegisterContainer>
  );
}

export default TodoRegister;
