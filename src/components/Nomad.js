import {View, FlatList} from 'react-native';
import React from 'react';
import {Nomdas} from '../utils/constant';
import NomadCard from './NomadCard';
const Nomad = () => {
  return (
    <View style={{marginVertical: 16}}>
      <FlatList
        data={Nomdas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <NomadCard
            userId={item.username}
            followers={item.followers}
            image={item.image}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
      />
    </View>
  );
};

export default Nomad;
