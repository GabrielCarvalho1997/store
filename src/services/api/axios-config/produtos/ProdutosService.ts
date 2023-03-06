import { Produto } from "types/produtos";
import { API } from "..";

const getAll = async (categoria = ""): Promise<Produto[] | Error> => {
  try {
    let urlRelativa = "";

    if (categoria) {
      urlRelativa = `/products/category/${categoria}`;
    } else {
      urlRelativa = "/products?limit=12";
    }
    const { data } = await API.get(urlRelativa);

    if (data) {
      return data;
    }
    // Erro de requisição
    return new Error("Erro ao listar os produtos.");
  } catch (error) {
    // Erro na consulta da url
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os produtos."
    );
  }
};

const getAllCategories = async (): Promise<string[] | Error> => {
  try {
    const { data } = await API.get("products/categories");

    if (data) {
      return data;
    }
    // Erro de requisição
    return new Error("Erro ao listar as categorias.");
  } catch (error) {
    // Erro na consulta da url
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar as categorias."
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
    return new Error("Erro ao consultar o produto.");
  } catch (error) {
    // Erro na consulta da url
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao consultar o produto."
    );
  }
};

// Omit - irá omitir o id no momento de criar um novo produto
const create = async (
  produto: Omit<Produto, "id">
): Promise<number | Error> => {
  try {
    const { data } = await API.post<Produto>("/products", produto);

    if (data) {
      return data.id;
    }
    // Erro de requisição
    return new Error("Erro ao criar o produto.");
  } catch (error: any) {
    // Erro na consulta da url
    console.error(error);
    return new Error(error.message || "Erro ao criar o produto.");
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
      (error as { message: string }).message || "Erro ao atualizar o produto."
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
      (error as { message: string }).message || "Erro ao apagar o produto."
    );
  }
};

// Outra maneira

export const ProdutosService = {
  getAll,
  getAllCategories,
  getById,
  create,
  updateById,
  deleteById,
};
