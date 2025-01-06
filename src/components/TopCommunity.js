import {View, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';
import {TopCommunities} from '../utils/constant';
const TopCommunity = () => {
  return (
    <View style={{marginTop: 16}}>
      <FlatList
        data={TopCommunities}
        key={item => item.id}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            topRightText={item.postsPerDay}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
      />
    </View>
  );
};

export default TopCommunity;
