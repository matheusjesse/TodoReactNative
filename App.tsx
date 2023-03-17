/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import TodoRegister from './src/screen/TodoRegister/index';
import TodoProvider from './src/context/todoContext';

export type RootStackParamList = {
  Home: undefined;
  TodoRegister: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TodoRegister" component={TodoRegister} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
}

export default App;
