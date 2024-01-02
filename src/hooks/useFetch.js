import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query) {
  const url = "/data/farmList.json";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get(url);
      await setList((prev) => [...prev, ...res.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery]);

  return { loading, error, list };
}

export default useFetch;
