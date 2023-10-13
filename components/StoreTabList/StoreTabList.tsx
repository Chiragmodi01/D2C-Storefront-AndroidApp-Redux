import React from 'react';
import {ScrollView, View} from 'react-native';
import StoreTab from '../StoreTab/StoreTab';

const StoreTabList = ({storeDataArray, navigation, user}) => {
  return (
    <ScrollView>
      {storeDataArray.map(store => {
        return <StoreTab store={store} navigation={navigation} user={user} />;
      })}
    </ScrollView>
  );
};

export default StoreTabList;
