import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destination, setDestination] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [desinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.log('====================================');
    console.log(originPlace,desinationPlace);
    console.log('====================================');
    if(originPlace && desinationPlace){
      console.log("redicrec to results");
    }
  },[originPlace,desinationPlace])
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
          query={{
            key: 'AIzaSyDb4GJhqNiMsQ5-G6PpYQS2syDFPMCVuMA',
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To ?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({data, details});
            // console.log(data, details);
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDb4GJhqNiMsQ5-G6PpYQS2syDFPMCVuMA',
            language: 'en',
          }}
          styles={{
            textInput: styles.textInput,
          }}
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
    padding: 10,
  },
  constainer: {
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
  },
});
