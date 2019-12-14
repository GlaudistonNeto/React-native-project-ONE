import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyleTwo}>Child #2</Text>
      <Text style={styles.textStyleOne}>Child #3</Text>
    </View>
  );
};

const styles  = StyleSheet.create({
  viewStyle: {
   //justifyContent: 'center', // the position of box related to the content
   alignItems: 'center',
   //flexDirection: 'row' // position of content in horizontal columns
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'lightgray'
  },
  textStyleOne: {
    borderWidth: 1,
    borderColor: 'lightgray',
    //alignSelf: 'flex-end'
    top: 240 //distance from the top to the screen
  },
  textStyleTwo: {
    borderWidth: 1,
    borderColor: 'lightgray',
    //position: 'absolute' //makes the layout ignore it siblings elements
  }
});

export default BoxScreen;