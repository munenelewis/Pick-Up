import {Dimensions, StyleSheet, Text, View} from 'react-native';

import CovidMessage from '../../component/CovidMessage';
import DestinationSearch from '../DestinationSearch';
import HomeMap from '../../component/map';
import HomeSearch from '../../component/HomeSearch';
import React from 'react';
import SearchResults from '../../component/SearchResults';

const HomeScreen = () => {
  return (
    <View>
      {/* <View style={{height: Dimensions.get('window').height - 500}}>
        <HomeMap />
      </View>

      <CovidMessage />
      <HomeSearch /> */}
      <DestinationSearch />
      {/* <SearchResults /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
