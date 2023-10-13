import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const StoreData = ({store}) => {
  const {name, type, address, area} = store;
  const {
    storeNameText,
    sectionContainer,
    storeTypeText,
    storeAddressText,
    storeAddress,
    storeLocationText,
  } = styles;
  return (
    <View style={sectionContainer}>
      <Text style={storeNameText}>{name}</Text>
      <Text style={storeAddressText}>Address</Text>
      <Text style={storeAddress}>{address}</Text>
    </View>
  );
};

export default StoreData;
