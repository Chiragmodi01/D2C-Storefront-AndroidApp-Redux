/**
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import useStoreData from '../CustomHooks/useStoreData';
import SearchBox from '../components/SearchBox/SearchBox';
import StoreTabList from '../components/StoreTabList/StoreTabList';
import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../src/actions/auth';

function HomePage({navigation, route}): JSX.Element {
  const {
    params: {user},
  } = route;
  const {state, actions} = useStoreData(user);
  const stateX = useSelector(state => state);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout()).then(response => {
      if (response.status === 'success') {
        navigation.replace('LoginScreen');
      }
    });
  };

  const {search, filteredDataSource, isLoading, storeDataArray, filterValue} =
    state;
  const {
    searchFilterFunction,
    setFilteredDataSource,
    getStoreData,
    setFilterValue,
  } = actions;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getStoreData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header user={user} onLogout={onLogout} />
        <SearchBox
          search={search}
          searchFilterFunction={searchFilterFunction}
        />
        <Filters
          search={search}
          storeDataArray={storeDataArray}
          filterValue={filterValue}
          setFilteredDataSource={setFilteredDataSource}
          setFilterValue={setFilterValue}
        />
        {isLoading && <Text style={styles.textStyle}>loading...</Text>}
        {!isLoading && filteredDataSource.length === 0 && (
          <Text style={styles.textStyle}>No store found!</Text>
        )}
        <StoreTabList
          storeDataArray={filteredDataSource}
          navigation={navigation}
          user={user}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  textStyle: {
    marginLeft: 10,
    color: 'black',
    alignSelf: 'center',
  },
});
