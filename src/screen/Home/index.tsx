import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ColorContainer, Text} from './style';
import HomeContainer from './style';
import {RootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TodoContextType} from '../../@types/types.todo';
import {TodoContext} from '../../context/todoContext';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function Home({navigation}: Props): JSX.Element {
  const {updateTheme, loadThemeColor} = React.useContext(
    TodoContext,
  ) as TodoContextType;
  return (
    <HomeContainer>
      <Text style={ColorContainer.container}>HomeM!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Click Here</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateTheme(!loadThemeColor())}>
        <Text>Click Teste</Text>
      </TouchableOpacity>
    </HomeContainer>
  );
}

export default Home;
