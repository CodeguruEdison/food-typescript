import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import ISearchScreen from '../interfaces/ISearchScreen';

const SearchScreen: FC<ISearchScreen> = () => {
  const [term, setTerm] = useState<string>('');
  const handleOnTermChange = (newTerm: string) => {
    setTerm(newTerm);
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={handleOnTermChange}
        onTermSubmit={() => {
          console.log('onsubmit');
        }}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
