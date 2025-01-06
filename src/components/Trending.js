import {View, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';
import {Hashtags} from '../utils/constant';
const Trending = () => {
  return (
    <View style={{marginTop: 16}}>
      <FlatList
        data={Hashtags}
        key={item => item.id}
        renderItem={({item}) => (
          <Card title={item.hashtag} image={item.image} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
      />
    </View>
  );
};

export default Trending;
