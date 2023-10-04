import { useLocation } from 'react-router-dom';
import useGlobalState from '../context/UseGlobalState';
import { useFetch } from './useFetch';
import { useEffect, useRef } from 'react';

export default function useRouteGlobalData<DataType>(apiUrl: string) {
  const location = useLocation();
  const { state, setState } = useGlobalState();

  const cacheKey = apiUrl;
  const cachedRouteData = state[cacheKey];
  const hasCachedRouteData = Boolean(cachedRouteData);

  const prevSearchRef = useRef(location.search);

  useEffect(() => {
    if (prevSearchRef.current !== location.search) {
      prevSearchRef.current = location.search;
      setState((prevState) => {
        const newState = { ...prevState };
        delete newState[cacheKey];
        return newState;
      });
    }
  }, [location.search, cacheKey, setState]);

  const { data, isLoading, error } = useFetch<DataType>({
    url: apiUrl,
    bypass: Boolean(cachedRouteData),
  });

  useEffect(() => {
    if (data && !hasCachedRouteData) {
      setState((prevState) => ({
        ...prevState,
        [cacheKey]: data,
      }));
    }
  }, [data, hasCachedRouteData, setState, apiUrl]);

  const _data = (hasCachedRouteData ? cachedRouteData : data) as DataType;

  return { data: _data, isLoading, error };
}
