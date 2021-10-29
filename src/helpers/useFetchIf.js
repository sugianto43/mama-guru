import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

axios.defaults.baseURL = 'http://falcon-dev.ap-southeast-1.elasticbeanstalk.com';
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export const useFetchIf = ({ url, method, body = null, startFetching }) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const source = axios.CancelToken.source();

  useEffect(() => {
    // let isMounted = true;
    if (startFetching) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const result = await axios.request({
            url,
            method,
            headers: { ...headers },
            data: body,
            cancelToken: source.token,
          });
          setResponse(result.data);
        } catch (errors) {
          console.log("error", errors.response);
          // isMounted && setError(errors.response);
          setError(errors.response);
        } finally {
          // isMounted && setLoading(false);
          setLoading(false);
        }
      };

      // isMounted && fetchData();
      fetchData()
    }
    // return () => {
    //   isMounted = false;
    //   source.cancel(`cancel req ${url}`);
    // };

  }, [startFetching]);

  return { response, error, loading };
};