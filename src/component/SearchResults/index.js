import {Dimensions, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import RouteMap from '../RouteMap';
import UberTypes from '../uberTypes';

export default function index() {
  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 500}}>
        <RouteMap />
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
