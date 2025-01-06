import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NomadCard = ({userId, followers, image}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{userId}</Text>
        <Text style={styles.text}>{followers}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textWrapper: {
    paddingTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  text: {
    color: '#5A7A7F',
    fontSize: 14,
  },
});

export default NomadCard;
