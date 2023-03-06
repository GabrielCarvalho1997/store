import { LoginData } from "types/auth";
import axios from "axios";

export const AuthService = {
  login: async (dados: LoginData): Promise<LoginData | Error> => {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/auth/login",
        dados,
        { headers }
      );

      if (data) {
        return data;
      }
      // Erro de requisição
      return new Error("Erro ao criar o produto.");
    } catch (error: any) {
      // Erro na consulta da url
      console.error(error);
      return new Error(error.message || "Erro ao criar o produto.");
    }
  },
};
