import React from 'react';
import DayPeriodContainer, {DayPeriodButton, Text} from './style';

export default function DayPeriod() {
  return (
    <DayPeriodContainer>
      <DayPeriodButton>
        <Text>Manhã</Text>
      </DayPeriodButton>
      <DayPeriodButton>
        <Text>Tarde</Text>
      </DayPeriodButton>
      <DayPeriodButton>
        <Text>Noite</Text>
      </DayPeriodButton>
    </DayPeriodContainer>
  );
}
