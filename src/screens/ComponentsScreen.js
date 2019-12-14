import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const name = 'Spk';

return (
  <View style={styles.StyleSheet}>
    <Text style={ styles.textStyle }>Getting started with React Native</Text>
<Text style={ styles.subHeaderStyle }>My name is { name }</Text>
  </View>
);
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 30
  },
  subHeaderStyle: { 
    fontSize: 25
   }
});

export default ComponentsScreen;