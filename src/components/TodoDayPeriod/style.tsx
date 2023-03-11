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
  background: ${theme.ThemeColor.secondary};
  border-radius: 10px;
  padding-top: 14px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 14px;
  display: flex;
  align-items: center;
`;

const styles = StyleSheet.create({
  boxWithShadow: {
    shadowColor: `${theme.ThemeColor.fontColor}`,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 2,
  },
});

export default TodoDayPeriodContainer;
export {Text, TodoCard, styles};
