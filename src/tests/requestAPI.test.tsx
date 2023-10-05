import { FetchAPI } from "../utils/requestAPI";

test('deve chamar a API e retornar dados corretamente', async () => {
  const data = await FetchAPI();

  // Verifique se data é uma resposta válida da API (depende da API real).
  expect(data).toBeDefined();
});



