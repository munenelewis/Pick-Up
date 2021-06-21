import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.UpperDrawer}>


        <View style={styles.imageContainer}>
            <View style={styles.image} />
            <View style={styles.imageDescription}>
                <Text style={styles.username}>Lewis Munene</Text>
                <Text style={styles.stars}> 5.0 * </Text>
            </View>
        </View>


        <View style={styles.Messages}>
          <Pressable>
            <Text style={styles.account}>Messages</Text>
          </Pressable>
        </View>

        <Pressable>
          <Text style={styles.account}>Do more with your account</Text>
        </Pressable>

        <Pressable>
          <Text style={styles.money}>Make Money Driving</Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  UpperDrawer: {
    backgroundColor: 'black',
    padding: 15,
  },
  money: {
    color: 'white',
    paddingVertical: 5,
  },
  account: {
    color: 'grey',
    paddingVertical: 5,
  },
  Messages: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor:'grey',
    borderBottomColor:'grey',
    paddingVertical:5,
    marginVertical:10
  },
  image:{
      backgroundColor: '#cacaca',
      width:50,
      height:50,
      marginRight:10,
      borderRadius:25
  },
  imageContainer:{
      flexDirection:'row',
      alignItems: 'center'
  },
  username:{
      color: 'white',
      fontSize:24
  },
  stars:{
    color: 'gray',
    // fontSize:24
  }
});
