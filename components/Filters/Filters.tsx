/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

const Filters = ({
  setFilteredDataSource,
  storeDataArray,
  search,
  setFilterValue,
  filterValue,
}) => {
  const filterData = [
    {value: 'area', id: 1},
    {value: 'name', id: 2},
    {value: 'route', id: 3},
    {value: 'type', id: 4},
  ];
  const onChangeFilter = useCallback(
    filterType => {
      setFilteredDataSource(
        storeDataArray.filter(
          item => item[filterType].toUpperCase() === search.toUpperCase(),
        ),
      );
    },
    [storeDataArray, search],
  );
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontWeight: '700'}}> Apply filters</Text>
        {filterData.map(filterDataItem => {
          const {value} = filterDataItem;
          return (
            <Pressable
              style={{
                backgroundColor: value === filterValue ? '#94b8b8' : 'white',
                flexDirection: 'column',

                paddingHorizontal: 12,
                paddingVertical: 4,
                marginHorizontal: 10,
              }}
              onPress={() => {
                setFilterValue(value);
                onChangeFilter(value);
              }}>
              <Text style={styles.label}>{value}</Text>
            </Pressable>
          );
        })}
      </View>
      <Pressable
        style={{paddingRight: 20, alignSelf: 'flex-end', marginBottom: 10}}
        onPress={() => {
          setFilterValue('');
          setFilteredDataSource(storeDataArray);
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 13,
            textDecorationLine: 'underline',
            color: '#527a7a',
          }}>
          clear all filters
        </Text>
      </Pressable>
    </>
  );
};

export default Filters;
