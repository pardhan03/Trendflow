import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Card = ({image, title, subtitle, isHashtag = false, topRightText}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={{uri: image}}
        style={styles.image}
        imageStyle={{borderRadius: 10}}>
        {topRightText && (
          <Text style={styles.topRightText}>{topRightText}</Text>
        )}
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 150,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
  },
  topRightText: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});

export default Card;
