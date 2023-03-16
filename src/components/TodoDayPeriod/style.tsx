import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

const TodoDayPeriodContainer = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;
const Text = styled.Text`
  color: ${theme.ThemeColor.fontColor};
  text-align: left;
  width: 348px;
`;
const TodoCard = styled.View`
  width: 348px;
  background: ${theme.ThemeColor.primary};
  border-radius: 10px;
  padding-top: 14px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 14px;
  display: flex;
  align-items: center;
`;

export default TodoDayPeriodContainer;
export {Text, TodoCard};
