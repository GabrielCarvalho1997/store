import { API } from '..';

interface IListagemProdutos {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface IDetalheProdutos {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

type TProdutosTotalCount = {
  data: IListagemProdutos[];
};

const getAll = async (filter = ''): Promise<TProdutosTotalCount | Error> => {
  try {
    const urlRelativa = `/products?limit=12&title_like=${filter}`;
    const { data } = await API.get(urlRelativa);

    if (data) {
      return data;
    }
    // Erro de requisição
    return new Error('Erro ao listar os produtos.');
  } catch (error) {
    // Erro na consulta da url
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os produtos.'
    );
  }
};

const getById = async (): Promise<any> => {};

const create = async (): Promise<any> => {};

const updateById = async (): Promise<any> => {};

const deleteById = async (): Promise<any> => {};

// Outra maneira
export const ProdutosService = {
  getAll: async (filter = '') => {
    try {
      const { data } = await API.get('/products', {
        params: {
          limit: 12,
          title_like: filter,
        },
      });

      return data;
    } catch (error) {}
  },
  getById,
  create,
  updateById,
  deleteById,
};
