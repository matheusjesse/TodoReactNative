import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from './style';
import HomeContainer from './style';
import {RootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

function Home({navigation}: Props): JSX.Element {
  return (
    <HomeContainer>
      <Text>HomeM!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Click Here</Text>
      </TouchableOpacity>
    </HomeContainer>
  );
}

export default Home;
