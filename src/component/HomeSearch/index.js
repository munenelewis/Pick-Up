import {Pressable, StyleSheet, Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeSearch = () => {
  const navigation = useNavigation()
  const goToSearch = () => {
    navigation.navigate("DestinationSearch")
  };
  return (
    <View>
      {/* input boxes */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.InputText}> Where To ?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </Pressable>

      {/* previous destination */}

      <View style={styles.row}>
        <View style={styles.IconContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
        </View>
        <Text style={styles.destination}> Nakuru </Text>
      </View>
      {/* home destination */}
      <View style={styles.destinationrow}>
        <View style={styles.destinationIconContainer}>
          <Entypo name={'home'} size={16} color={'#fff'} />
        </View>
        <Text style={styles.destination_destination}> Nakuru </Text>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#d9d9d9',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  InputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#434343',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  IconContainer: {
    padding: 10,
    borderRadius: 35,
    backgroundColor: '#b3b3b3',
  },
  destination: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },

  destinationrow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  destinationIconContainer: {
    padding: 10,
    borderRadius: 35,
    backgroundColor: '#2b80ff',
    color: '#fff',
  },
  destination_destination: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
