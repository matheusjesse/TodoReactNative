import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';
const TodoInLineContainer = styled.View`
  display: flex;
  flex-direction: row;
  border: none;
  width: 338px;
  height: 44px;
  align-items: center;
  background-color: ${theme.ThemeColor.primary};
  margin-bottom: 12px;
  border-radius: 22px;
`;
const CheckButton = styled.TouchableOpacity`
  margin-left: 12px;
`;
const Text = styled.Text`
  margin-left: 8px;
`;
const TodoTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 278px;
`;

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: `${theme.ThemeColor.fontColor}`,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 0.8,
    elevation: 4,
  },
});
export default TodoInLineContainer;
export {CheckButton, Text, TodoTextContainer, styles};
