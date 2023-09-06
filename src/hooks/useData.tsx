import React, { useState, useEffect } from 'react';

interface FetchResponse<T> {
  data: T[];
}

const BASE_URL = 'https://api.artic.edu/api/v1/';

function useData<T>(endpoint: string, searchTerm: string = '', size: number = 20) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      const fullURL = `${BASE_URL}search?q=${encodeURIComponent(
        searchTerm,
      )}&size=${size}&${endpoint}`;

      try {
        const response = await fetch(fullURL, { signal: controller.signal });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Network response was not ok.');
        }

        const responseData: FetchResponse<T> = await response.json();
        setData(responseData.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint, searchTerm, size]);

  return { data, error, isLoading };
}

export default useData;
