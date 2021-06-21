import {StyleSheet, Text, View} from 'react-native';

import DestinationSearch from '../screens/DestinationSearch';
import HomeSearch from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SearchResults from '../screens/SearchResults';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeNavigator = props => {
  return (

      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"HomeSearch"}>
        <Stack.Screen name={'HomeSearch'} component={HomeSearch} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
