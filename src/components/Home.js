import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Card from './Card';
import Nomad from './Nomad';
import TopCommunity from './TopCommunity';
import Trending from './Trending';
import Search from './Search';

const Home = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Text style={styles.heading}>Discover the world</Text>
      <View style={styles.container}>
        <Search />
        <View style={styles.topSearch}>
          <ImageBackground
            source={{
              uri: 'https://fastly.picsum.photos/id/85/200/200.jpg?hmac=gQRdT-HPw1azaNf38WLW_QZv7aC0WjwOSM4Sf5kWm3U',
            }}
            style={styles.image}
            imageStyle={{borderRadius: 10}}>
            <View style={styles.overlay}>
              <Text style={styles.text}>#Top search of the day</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Trending hastags</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <Trending />
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Top community</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <TopCommunity />
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Top Nomads</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <Nomad />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  heading: {
    paddingHorizontal: 16,
    marginTop: 10,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7f8c8d',
  },
  topSearch: {
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
  seeAll: {
    fontSize: 14,
    color: '#7f8c8d',
    textDecorationLine: 'underline',
  },
});
