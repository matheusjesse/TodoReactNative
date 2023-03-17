import React from 'react';
import {TodoContextType, TodoRegisterType} from '../../@types/types.todo';
import {TodoContext} from '../../context/todoContext';
import EmptyCheckBox from '../../assets/images/square-line-icon.svg';
import CheckBox from '../../assets/images/check-mark-square-icon.svg';

import DayPeriodContainer, {
  ButtonContainer,
  DayPeriodButton,
  ImageContainer,
  styles,
  Text,
} from './style';
import theme from '../../styles/theme';

const EmptySquare = () => {
  return (
    <EmptyCheckBox height={20} width={20} fill={theme.ThemeColor.tertiary} />
  );
};

const CheckSquare = () => {
  return (
    <CheckBox
      height={20}
      width={20}
      fill={theme.ThemeColor.tertiary}
    />
  );
};

export default function DayPeriod() {
  const {registerTodo, loadTodo} = React.useContext(
    TodoContext,
  ) as TodoContextType;

  const toggleDayPeriod = (title: string) => {
    let dayPeriod = {} as TodoRegisterType;
    const dataTodos = loadTodo();
    if (title === 'morning') {
      dayPeriod = {
        ...dataTodos,
        dayPeriod: {
          ...dataTodos.dayPeriod,
          morning: !dataTodos.dayPeriod.morning,
        },
      };
    }

    if (title === 'afternoon') {
      dayPeriod = {
        ...dataTodos,
        dayPeriod: {
          ...dataTodos.dayPeriod,
          afternoon: !dataTodos.dayPeriod.afternoon,
        },
      };
    }

    if (title === 'night') {
      dayPeriod = {
        ...dataTodos,
        dayPeriod: {
          ...dataTodos.dayPeriod,
          night: !dataTodos.dayPeriod.night,
        },
      };
    }
    registerTodo(dayPeriod);
  };

  return (
    <DayPeriodContainer>
      <ButtonContainer style={styles.shadowProp}>
        <DayPeriodButton onPress={() => toggleDayPeriod('morning')}>
          <ImageContainer>
            {!loadTodo().dayPeriod.morning ? <EmptySquare /> : <CheckSquare />}
          </ImageContainer>
          <Text>Manhã</Text>
        </DayPeriodButton>
      </ButtonContainer>
      <ButtonContainer style={styles.shadowProp}>
        <DayPeriodButton onPress={() => toggleDayPeriod('afternoon')}>
          <ImageContainer>
            {!loadTodo().dayPeriod.afternoon ? (
              <EmptySquare />
            ) : (
              <CheckSquare />
            )}
          </ImageContainer>
          <Text>Tarde</Text>
        </DayPeriodButton>
      </ButtonContainer>
      <ButtonContainer style={styles.shadowProp}>
        <DayPeriodButton onPress={() => toggleDayPeriod('night')}>
          <ImageContainer>
            {!loadTodo().dayPeriod.night ? <EmptySquare /> : <CheckSquare />}
          </ImageContainer>
          <Text>Noite</Text>
        </DayPeriodButton>
      </ButtonContainer>
    </DayPeriodContainer>
  );
}
