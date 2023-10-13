import {useEffect, useState} from 'react';

const useStoreData = user => {
  const [storeData, setStoreData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //use firebase sdk for fetching json
  const getStoreData = async () => {
    const response = await fetch(
      'https://kirana-db-default-rtdb.firebaseio.com/.json',
    );
    const data = await response.json();
    if (data.stores) {
      setIsLoading(false);
      // for user store id

      const userStoresIds = Object.keys(data.users)
        .map(prop => {
          return data.users[prop];
        })
        .filter(u => {
          return u.name === user;
        })[0].stores;

      const stores = data.stores;
      // for users ke stores
      const userStores = Object.keys(stores)
        .filter(id => userStoresIds.includes(id))
        .reduce((obj, key) => {
          return Object.assign(obj, {
            [key]: stores[key],
          });
        }, {});

      setStoreData(userStores);
      // for filters
      setFilteredDataSource(
        Object.keys(userStores).map(function (property) {
          return stores[property];
        }),
      );
    } else {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getStoreData();
  }, []);

  let storeDataArray = Object.keys(storeData).map(function (property) {
    // to make a new key
    let ret = storeData[property];
    ret.storeId = property;
    return ret;
  });

  const [search, setSearch] = useState('');

  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  const searchFilterFunction = text => {
    if (text && !filterValue) {
      const newData = storeDataArray.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else if (text && filterValue) {
      setFilteredDataSource(
        storeDataArray.filter(
          item => item[filterValue].toUpperCase() === text.toUpperCase(),
        ),
      );
      setSearch(text);
    } else {
      setFilteredDataSource(storeDataArray);
      setSearch(text);
    }
  };

  return {
    actions: {
      searchFilterFunction,
      setFilteredDataSource,
      getStoreData,
      setFilterValue,
    },
    state: {search, storeDataArray, filteredDataSource, isLoading, filterValue},
  };
};

export default useStoreData;
