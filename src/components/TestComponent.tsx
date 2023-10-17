import { useGetListingsForSaleQuery } from '../store/api/testApi';

export const MyComponent = () => {
  const { data, error, isLoading } = useGetListingsForSaleQuery({
    location: 'New York',
    property_type: 'single_family',
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Проверка типа ошибки
    if ('status' in error && 'data' in error) {
      // Обработка ошибки FetchBaseQueryError
      return <div>Error: {error.status}</div>;
    }

    // Обработка ошибки SerializedError
    return <div>Error: {error?.data?.message}</div>;
  }

  if (data) {
    // Обработка данных
    const listings = data.results;
    // Дальнейшая обработка данных...
    return <div>Listings: {listings.length}</div>;
  }

  return null;
};
