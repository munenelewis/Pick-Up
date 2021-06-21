import {StyleSheet, Text, View} from 'react-native';

import CustomDrawerContent from './Drawer'
import DestinationSearch from '../screens/DestinationSearch';
import HomeNavigator from './Home';
import HomeSearch from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SearchResults from '../screens/SearchResults';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DummpCompone = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.name}</Text>
    </View>
  );
};
const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={HomeNavigator} />

        <Drawer.Screen name="Your Trips">
          {() => <DummpCompone name="Your Trieps" />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummpCompone name="Help" />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummpCompone name="Wallet" />}
        </Drawer.Screen>

        <Drawer.Screen name="settings">
          {() => <DummpCompone name="settings" />}
        </Drawer.Screen>
      </Drawer.Navigator>
      {/* <HomeNavigator /> */}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
