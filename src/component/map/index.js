import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import React from 'react';
import cars from '../../assests/data/cars';

const HomeMap = () => {
  const getImage = type => {
    const base = '../../assests/images/';
    if (type == 'UberXL') {
      return require(`../../assests/images/top-UberXL.png`);
    }
    if (type == 'UberX') {
      return require(`../../assests/images/top-UberX.png`);
    }
    if (type == 'Comfort') {
      return require('../../assests/images/top-Comfort.png');
    }
  };
  return (
    <MapView
    showsUserLocation={true}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(item => (
        <Marker
          key={item.id}
          coordinate={{latitude: item.latitude, longitude: item.longitude}}>
          <Image
            style={{
              ...styles.marker,
              transform: [
                {
                  rotate: `${item.heading}deg`,
                },
              ],
            }}
            source={getImage(item.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  map: {height: '100%', width: '100%'},
  marker: {height: 70, width: 70, resizeMode: 'contain'},
});
