import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/LoginPage';
import HomePage from '../../screens/HomePage';
import StorePage from '../../screens/StorePage';
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StorePage"
        component={StorePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
const NavigationProvider = () => {
  return <AuthStack />;
};
export default NavigationProvider;
