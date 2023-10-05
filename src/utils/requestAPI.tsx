import { NumbersType } from './types';

const FetchAPI = async () => {
  const response = await fetch('https://swapi.dev/api/planets/');
  const data = await response.json();
  const { results } = data;
  const withOutResidents = results.map((searched: NumbersType) => {
    const { residents, ...remainder } = searched;
    return remainder;
  });
  return withOutResidents;
};

export { FetchAPI };
