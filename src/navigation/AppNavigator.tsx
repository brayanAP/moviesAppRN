import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoviesLandingScreen from '../screens/MoviesLandingScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white',
      },
    }}>
    <Stack.Screen name="MoviesLandingScreen" component={MoviesLandingScreen} />
    <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
