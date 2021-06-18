import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const HomeMap = () => {
  return (
    <View style={styles.homeMap}>
      <Text>I am a map</Text>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  homeMap: {
    height: 300,
    backgroundColor: '#e331',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
