import { useLocation } from 'react-router-dom';
import useGlobalState from '../context/useGlobalState';
import { useFetch } from './useFetch';

export default function useRouteGlobalData<DataType>(apiUrl: string) {
  const location = useLocation();

  const { state, setState } = useGlobalState();

  const cachedRouteData = state[location.pathname];

  const hasCachedRouteData = Boolean(cachedRouteData);

  const { data, isLoading, error } = useFetch<DataType>(apiUrl, Boolean(cachedRouteData));

  if (data && !hasCachedRouteData) {
    setState((prevState) => ({
      ...prevState,
      [location.pathname]: data,
    }));
  }

  const _data = (hasCachedRouteData ? cachedRouteData : data) as DataType;

  return { data: _data, isLoading, error };
}
