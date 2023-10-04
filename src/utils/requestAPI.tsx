export async function getFetch() {
  const response = await fetch('https://swapi.dev/api/planets');
  const data = await response.json();
  const { results } = data;

  results.forEach((planet: any) => delete planet.residents);
  return results;
}
