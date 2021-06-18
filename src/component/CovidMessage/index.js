import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Travel only if nessesary</Text>
      <Text style={styles.text}>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar
        lorem tempus urna congue, vitae blandit ligula mollis. Aliquam erat
        rutrum cursus dapibus. Aliquam ac nisl et tortor pellentesque aliquam.
        pellentesque pulvinar.
      </Text>
      <Text style={styles.learnMore}> Learn more</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b80ff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
