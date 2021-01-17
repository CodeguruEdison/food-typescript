import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'SearchScreen'}
        screenOptions={{headerShown: true, title: 'Business Search'}}>
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
