import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destination, setDestination] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [desinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && desinationPlace) {
      console.log('redicrec to results');
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
    padding: 5,
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
});
