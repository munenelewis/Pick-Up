import {StyleSheet, Text, View} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';

const PlaceRow = ({data}) => {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <View style={styles.row}>
      <View style={styles.IconContainer}>
        {data.description === 'Home' ? (
          <Entypo name="home" size={20} color="blue" />
        ) : (
          <Entypo name="location-pin" size={20} color="white" />
        )}
      </View>
      <Text style={styles.LocationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
};

export default PlaceRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  IconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  LocationText: {},
});
