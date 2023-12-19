import { useEffect, useState } from "react";
// https://fakestoreapi.com/products
const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async function () {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      setData(json);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
