import { AxiosResponse } from 'axios';

// Usado pra interceptar e tratar todos os tipos de respostas
export const responseInterceptor = (response: AxiosResponse) => {
  // Decidir o que fazer com a resposta - toastify
  return response;
};
