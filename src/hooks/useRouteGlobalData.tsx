import { useLocation } from 'react-router-dom';
import useGlobalState from '../context/useGlobalState';
import { useFetch } from './useFetch';
import { useRef, useEffect } from 'react';

export default function useRouteGlobalData<DataType>(apiUrl: string) {
  const location = useLocation();
  const { state, setState } = useGlobalState();

  const cacheKey = `${location.pathname}${location.search}`;
  const cachedRouteData = state[cacheKey];

  const hasCachedRouteData = Boolean(cachedRouteData);
  const dataFetchedRef = useRef(false);

  const { data, isLoading, error } = useFetch<DataType>(apiUrl, Boolean(cachedRouteData));

  if (data && !hasCachedRouteData && !dataFetchedRef.current) {
    dataFetchedRef.current = true;
    setState((prevState) => ({
      ...prevState,
      [cacheKey]: data,
    }));
  }

  // Reset the ref if the apiUrl changes
  useEffect(() => {
    dataFetchedRef.current = false;
  }, [apiUrl]);

  const _data = (hasCachedRouteData ? cachedRouteData : data) as DataType;

  console.log('Using cached data for:', apiUrl, hasCachedRouteData);
  return { data: _data, isLoading, error };
}
