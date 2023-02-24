import { Produto } from 'types/produtos';
import { API } from '..';

// interface IListagemProdutos {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating?: {
//     rate: number;
//     count: number;
//   };
// }

// interface IDetalheProdutos {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating?: {
//     rate: number;
//     count: number;
//   };
// }

type TProdutosTotalCount = {
  data: Produto[];
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

const getById = async (id: number): Promise<Produto | Error> => {
  try {
    const { data } = await API.get(`/products/${id}`);

    if (data) {
      return data;
    }
    // Erro de requisição
    return new Error('Erro ao consultar o produto.');
  } catch (error) {
    // Erro na consulta da url
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o produto.'
    );
  }
};

// Omit - irá omitir o id no momento de criar um novo produto
const create = async (
  produto: Omit<Produto, 'id'>
): Promise<number | Error> => {
  try {
    const { data } = await API.post<Produto>('/products', produto);

    if (data) {
      return data.id;
    }
    // Erro de requisição
    return new Error('Erro ao criar o produto.');
  } catch (error: any) {
    // Erro na consulta da url
    console.error(error);
    return new Error(error.message || 'Erro ao criar o produto.');
  }
};

const updateById = async (
  id: number,
  dados: Produto
): Promise<void | Error> => {
  try {
    await API.put(`/products/${id}`, dados);
  } catch (error) {
    // Erro na consulta da url
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao atualizar o produto.'
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await API.delete(`/products/${id}`);
  } catch (error) {
    // Erro na consulta da url
    console.error(error);
    return new Error(
      (error as { message: string }).message || 'Erro ao apagar o produto.'
    );
  }
};

// Outra maneira

export const ProdutosService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};

// export const ProdutosService = {
//   getAll: async (filter = '') => {
//     try {
//       const { data } = await API.get('/products', {
//         params: {
//           limit: 12,
//           title_like: filter,
//         },
//       });

//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   },
//   getById,
//   create,
//   updateById,
//   deleteById,
// };
