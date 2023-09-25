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
        [location.pathname]: data,
      }));
    }
  }, [data, hasCachedRouteData, location.pathname, setState, apiUrl]);

  const _data = (hasCachedRouteData ? cachedRouteData : data) as DataType;

  console.log('Using cached data for:', apiUrl, hasCachedRouteData);
  return { data: _data, isLoading, error };
}
