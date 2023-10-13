import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

const SearchBox = ({searchFilterFunction, search}) => {
  return (
    <View>
      <TextInput
        style={styles.sectionContainer}
        placeholderTextColor="black"
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
    </View>
  );
};

export default SearchBox;
