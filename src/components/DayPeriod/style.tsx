import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

const DayPeriodContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const DayPeriodButton = styled.TouchableOpacity`
  width: 118px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 1px 1px black;
`;

const ButtonContainer = styled.View`
  background-color: ${theme.ThemeColor.primary};
  border-radius: 6px;
`;

const ImageContainer = styled.View`
  width: 28px;
  height: 28px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  margin-left: 4px;
  color: ${theme.ThemeColor.fontColor};
`;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: `${theme.ThemeColor.fontColor}`,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default DayPeriodContainer;
export {DayPeriodButton, Text, ImageContainer, styles, ButtonContainer};
