import TodoInLine from '../TodoInLine';
import React from 'react';
import TodoDayPeriodContainer, {styles, Text, TodoCard} from './style';
const mockTest = [
  {
    id: 2,
    noteText: 'Estudar',
    completed: true,
  },
  {
    id: 4,
    noteText: 'Comprar café',
    completed: true,
  },
  {
    id: 6,
    noteText: 'Assistir Netflix',
    completed: false,
  },
];

function TodoDayPeriod({title}: {title: string}) {
  return (
    <TodoDayPeriodContainer>
      <Text>{title}</Text>
      <TodoCard style={styles.boxWithShadow}>
        {mockTest.map(element => (
          <TodoInLine data={element} />
        ))}
      </TodoCard>
    </TodoDayPeriodContainer>
  );
}

export default TodoDayPeriod;
