import {Image, StyleSheet, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const UberRow = (props) => {
    const {type} = props
    const UberXL = `../../assests/images/${'UberXL'}.jpeg`
    const UberX = `../../assests/images/${'UberX'}.jpeg`
    const Comfort = `../../assests/images/${'Comfort'}.jpeg`

    const getImage = ()  => {
        const base = "../../assests/images/"
        if(type.type == 'UberXL'){
            return require(`../../assests/images/UberXL.jpeg`)
        }
        if(type.type == 'UberX'){
            return require(`../../assests/images/UberX.jpeg`)
        }
        if(type.type == 'Comfort'){
            return require("../../assests/images/Comfort.jpeg")
        }
    }
  return (
    <View style={styles.container}>
      {/* IMAGE */}
      <Image
        style={styles.image}
        source={getImage()}
      />
      <View style={styles.middleContainer}>
        {/* MIDDLE */}

        <Text style={styles.type}>
          {type.type} <Ionicons name={'person'} size={18} /> 3
        </Text>
        <Text style={styles.time}> drop off : 8.30 pm </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'green'} />
        <Text style={styles.price}>est . ksh {type.price}</Text>
      </View>
    </View>
  );
};

export default UberRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    width: 70,
    height: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    //   alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
  },
});
