import { useLocation } from 'react-router-dom';
import useGlobalState from '../context/UseGlobalState';
import { useFetch } from './useFetch';
import { useEffect } from 'react';

export default function useRouteGlobalData<DataType>(apiUrl: string) {
  const location = useLocation();
  const { state, setState } = useGlobalState();

  const cacheKey = apiUrl;
  const cachedRouteData = state[cacheKey];

  const hasCachedRouteData = Boolean(cachedRouteData);

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
  }, [data, hasCachedRouteData, location.pathname, setState, apiUrl]);

  const _data = (hasCachedRouteData ? cachedRouteData : data) as DataType;

  console.log('Using cached data for:', apiUrl, hasCachedRouteData);
  return { data: _data, isLoading, error };
}
