import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';
const HomeContainer = styled.ScrollView`
  background-color: ${theme.ThemeColor.primary};
  height: 100%;
`;

const Text = styled.Text`
  font-size: 45px;
`;

const ColorContainer = StyleSheet.create({
  container: {
    color: `${theme.ThemeColor.secondary}`,
  },
});

const whiteContainer = StyleSheet.create({
  container: {
    color: `${theme.whiteTheme.primary}`,
  },
});

const darkContainer = StyleSheet.create({
  container: {
    color: `${theme.darkTheme.primary}`,
  },
});
export default HomeContainer;
export {Text, whiteContainer, darkContainer, ColorContainer};
