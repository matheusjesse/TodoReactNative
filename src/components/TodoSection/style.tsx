import styled from 'styled-components/native';
import theme from '../../styles/theme';
const TodoSectionContainer = styled.View`
  margin-bottom: 22px;
`;

const Text = styled.Text`
  font-family: ${theme.fonts.overpassSemiBold};
  color: ${theme.ThemeColor.fontColor};
  font-size: 24px;
  text-align: center;
`;
export default TodoSectionContainer;
export {Text};
