import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import ISearchScreen from '../interfaces/ISearchScreen';
import useResult from '../hooks/useResult';

const SearchScreen: FC<ISearchScreen> = () => {
  const [term, setTerm] = useState<string>('');
  const [searchApi, results, errorMessage] = useResult();

  const handleOnTermChange = (newTerm: string) => {
    setTerm(newTerm);
  };
  const handleOnTermSubmit = async () => {
    await searchApi(term);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={handleOnTermChange}
        onTermSubmit={handleOnTermSubmit}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{JSON.stringify(results)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
