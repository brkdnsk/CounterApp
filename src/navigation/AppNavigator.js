import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from '../screens/Counter';
import CounterScreen from '../screens/CounterScreen';
import BoxPage from '../screens/BoxPage';
import ColorChangeScreen from '../screens/ColorChangeScreen';
import PasswordScreen from '../screens/PasswordScreen';
import DesignScreen from '../screens/DesignScreen';



const Stack= createNativeStackNavigator();

export default function AppNavigator({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={CounterScreen} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="BoxPage" component={BoxPage} />
        <Stack.Screen name="ColorScreen" component={ColorChangeScreen} />
        <Stack.Screen name="PassPage" component={PasswordScreen} />
        <Stack.Screen name="DesScreen" component={DesignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
