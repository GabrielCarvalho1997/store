import { AxiosError } from 'axios';

// Usado pra interceptar e tratar todos os tipos de erros
export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Erro de conexão.'));
  }

  if (error.response?.status === 401) {
    // Decidir o que fazer com esse erro
  }

  return Promise.reject(error);
};
