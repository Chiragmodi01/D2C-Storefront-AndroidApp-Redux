import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const Header = ({user, onLogout}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.userName}>{user}</Text>
      <Pressable onPress={() => onLogout()}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Header;
