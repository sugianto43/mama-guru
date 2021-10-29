import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://falcon-dev.ap-southeast-1.elasticbeanstalk.com';
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export const useFetchIf = ({ url, method, body = null, startFetching }) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const source = axios.CancelToken.source();

  useEffect(() => {
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
          setError(errors.response);
        } finally {
          setLoading(false);
        }
      };

      fetchData()
    }

  }, [startFetching]);

  return { response, error, loading };
};