import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://falcon-dev.ap-southeast-1.elasticbeanstalk.com';
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export const useFetch = ({ url, method, body = null }) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios.request({
          url,
          method,
          headers: { ...headers },
          data: body,
        });
        setResponse(result.data);
      } catch (errors) {
        console.log("error", errors.response);
        setError(errors.response);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, []);

  return { response, error, loading };
};