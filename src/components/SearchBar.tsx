import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import ISearchBar from '../interfaces/ISearchBar';
import Icon from 'react-native-vector-icons/Feather';
const SearchBar: FC<ISearchBar> = (props) => {
  const {term, onTermChange, onTermSubmit} = props;
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        style={styles.inputStyle}
        onEndEditing={onTermSubmit}
      />
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
