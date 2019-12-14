import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (<View style={styles.viewStyle}>
    <ImageDetail 
      title="Forest"
      imageSource={ require('../../assets/forest.jpg') }
      score={9} 
    />
    <ImageDetail 
      title="Beach" 
      imageSource={ require('../../assets/beach.jpg') }
      score={7} 
    />
    <ImageDetail 
      title="Mountain" 
      imageSource={ require('../../assets/mountain.jpg') }
      score={10} 
    />
  </View>);
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center' // the position of box related to the content
   }
});

export default ImageScreen;