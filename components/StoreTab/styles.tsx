import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'column',
  },
  mainSectionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 130,
    backgroundColor: '#e0ebeb',
    marginBottom: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginRight: 10,
  },

  storeNameText: {
    fontWeight: '700',
    color: 'black',
  },
  storeTypeText: {
    fontWeight: '300',
    fontSize: 14,
    marginLeft: 5,
    color: '#639c9c',
  },
  storeLocationText: {
    fontWeight: '700',
    fontSize: 12,
    marginLeft: 5,
    color: 'black',
  },
});
