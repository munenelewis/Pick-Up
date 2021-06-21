import {Pressable, StyleSheet, Text, View} from 'react-native';

import React from 'react';
import UberRow from '../uberTypeRow';
import typesData from '../../assests/data/types';

const index = () => {
    const confirm = () => {

    }
  return (
    <View>
      {typesData.map((type, index) => (
        <UberRow type={type}  key={index}/>
      ))}

      <Pressable onPress={confirm} style={styles.uberCorn}>
          <Text style={styles.textConf}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
    uberCorn:{
    
        backgroundColor:'black',
        padding:10,
        margin:10,
        alignItems: 'center',
    },
    textConf:{
        color:'white',
        fontWeight:'bold',
    }
});
