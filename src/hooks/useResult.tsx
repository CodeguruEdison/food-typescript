import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    //setTerm(term);
    searchApi('pasta');
  }, []);
  const searchApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          searchTerm,
          location: 'Edison,NJ',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err);
      setErrorMessage('something went wrong');
    }
  };
  return [searchApi, results, errorMessage] as const;
};
