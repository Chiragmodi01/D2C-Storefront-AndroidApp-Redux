import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const StoreTab = ({store, navigation, user}) => {
  const {name, type, area, route} = store;
  const {
    sectionContainer,
    mainSectionContainer,
    storeNameText,
    storeTypeText,
    storeLocationText,
  } = styles;

  return (
    <Pressable
      style={mainSectionContainer}
      onPress={() => navigation.navigate('StorePage', {store, user})}>
      <View style={sectionContainer}>
        <Text style={storeNameText}>{name}</Text>
        <Text style={storeTypeText}>{type}</Text>
        <Text style={storeLocationText}>Location: {area}</Text>
        <Text style={storeLocationText}>Route: {route}</Text>
      </View>
      <Image
        source={{
          uri: 'https://img.icons8.com/small/35/squiggly-arrow.png',
        }}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </Pressable>
  );
};

export default StoreTab;
