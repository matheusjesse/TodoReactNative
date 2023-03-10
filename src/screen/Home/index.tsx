import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
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
      <Text>Home!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>ClickHere</Text>
      </TouchableOpacity>
    </HomeContainer>
  );
}

export default Home;
