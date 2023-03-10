import {Text} from '../../screen/Home/style';
import React from 'react';
import TodoSectionContainer from './style';
import TodoDayPeriod from '../TodoDayPeriod';

function TodoSection() {
  return (
    <TodoSectionContainer>
      <Text>A fazeres de hoje</Text>
      <TodoDayPeriod title={'Manhã'} />
    </TodoSectionContainer>
  );
}

export default TodoSection;
