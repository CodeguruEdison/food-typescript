import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import ISearchBar from '../interfaces/ISearchBar';
import Icon from 'react-native-vector-icons/Feather';
const SearchBar: FC<ISearchBar> = (props) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
   
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
   fontSize: 18,
    flex: 1,
  },
});
export default SearchBar;
