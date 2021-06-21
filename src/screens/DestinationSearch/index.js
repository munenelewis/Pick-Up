import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


const DestinationSearch = () => {
  const navigation = useNavigation()
  const [fromText, setFromText] = useState('');
  const [destination, setDestination] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [desinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && desinationPlace) {
      navigation.navigate("SearchResults",{
        originPlace,
        desinationPlace
      })
    }
  }, [originPlace, desinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.constainer}>
        <GooglePlacesAutocomplete
          placeholder="Where From ?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({data, details});
            // console.log(data, details);
          }}
          fetchDetails
          suppressDefaultStyles
          query={{
            key: 'AIzaSyDb4GJhqNiMsQ5-G6PpYQS2syDFPMCVuMA',
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
            container: styles.autoComomplete,
            listView: styles.listView,
            separator: styles.separator,
          }}
          renderRow={data => <PlaceRow data={data} />}
          enablePoweredByContainer={false}
          currentLocation={true}
          currentLocationLabel={'Current Location'}
          renderDescription={(data) =>data.description || data.vicinity }
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To ?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
            // console.log(data, details);
          }}
          fetchDetails
          suppressDefaultStyles
          enablePoweredByContainer={false}
          query={{
            key: 'AIzaSyDb4GJhqNiMsQ5-G6PpYQS2syDFPMCVuMA',
            language: 'en',
          }}
          styles={{
            textInput: {...styles.textInput},
            container: {...styles.autoComomplete, top: 55},
            separator: styles.separator,
          }}
          renderRow={data => <PlaceRow data={data} />}
        />

        <View style={styles.originCircle}></View>

        <View style={styles.line}></View>
        <View style={styles.desinationPlace}></View>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    backgroundColor: '#eee',
    marginVertical: 5,
    padding: 10,
    marginLeft: 10,
  },
  constainer: {
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  autoComomplete: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  originCircle: {
    width:10,
    height:10,
    backgroundColor: 'black',
    position: 'absolute',
    top:25,
    left:5,
    borderRadius:50
  },
  line: {
    width:1,
    height:50,
    backgroundColor: 'grey',
    position: 'absolute',
    top:35,
    left:10
  },
  desinationPlace: {
    width:10,
    height:10,
    backgroundColor: 'black',
    position: 'absolute',
    top:80,
    left:5
  },
});
