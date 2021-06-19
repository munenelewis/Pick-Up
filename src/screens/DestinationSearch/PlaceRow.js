import {StyleSheet, Text, View} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';

const PlaceRow = ({data}) => {

  return (
    <View style={styles.row}>
      <View style={styles.IconContainer}>
        <Entypo name="location-pin" size={20} color="white" />
      </View>
      <Text style={styles.LocationText}>{data.description}</Text>
    </View>
  );
};

export default PlaceRow;

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:10
    },
    IconContainer:{
        backgroundColor:'#a2a2a2',
        padding: 5,
        borderRadius:50,
        marginRight:15
    },
    LocationText:{}
});
