import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../styles/theme';
const HomeContainer = styled.SafeAreaView``;

const Text = styled.Text`
  font-size: 45px;
`;

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
export {Text, whiteContainer, darkContainer};
