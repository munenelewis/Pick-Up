import {Dimensions, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import RouteMap from '../../component/RouteMap';
import UberTypes from '../../component/uberTypes';
import { useRoute } from '@react-navigation/native'

const SearchResults = (props) => { 
  const route = useRoute()
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 500}}>
        <RouteMap origin={route.params.desinationPlace.details.geometry.location} destination={route.params.originPlace.details.geometry.location} />
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
}
export default SearchResults;

const styles = StyleSheet.create({});
