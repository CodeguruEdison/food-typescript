import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import ISearchScreen from '../interfaces/ISearchScreen';

const SearchScreen: FC<ISearchScreen> = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
