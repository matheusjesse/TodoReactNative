import {Text} from './style';
import React from 'react';
import TodoSectionContainer from './style';
import TodoDayPeriod from '../TodoDayPeriod';

function TodoSection() {
  return (
    <TodoSectionContainer>
      <Text>A fazeres de hoje</Text>
      <TodoDayPeriod title={'Manhã'} />
      <TodoDayPeriod title={'Tarde'} />
      <TodoDayPeriod title={'Noite'} />
    </TodoSectionContainer>
  );
}

export default TodoSection;
