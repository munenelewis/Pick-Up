import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';
import React from 'react';
import cars from '../../assests/data/cars';

const RouteMap = (props) => {

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
  const origin = {
    latitude: props.destination.lat,
    longitude: props.destination.lng,
  };

  const destination = {
    latitude: props.origin.lat,
    longitude: props.origin.lng,
  };

  console.log('====================================');
  console.log(destination);
  console.log('====================================');
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDb4GJhqNiMsQ5-G6PpYQS2syDFPMCVuMA'
  return (
    <MapView
     showsUserLocation={true}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor='black'
        
      />
      <Marker coordinate={origin} title={'From'} />
      <Marker coordinate={destination} title={'Destion'} />
    </MapView>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  map: {height: '100%', width: '100%'},
  marker: {height: 70, width: 70, resizeMode: 'contain'},
});
