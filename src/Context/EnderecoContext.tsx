import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../utilidade/api";
import {
  toastConfig,
  IChildren,
  IEnderecoContext,
  IEndereco,
} from "../utilidade/interface";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import nProgress from "nprogress";

export const EnderecoContext = createContext({} as IEnderecoContext);

export const EnderecoProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const criaEnderecoPessoa = async (endereco: IEndereco, idPessoa: number) => {
    try {
      api.defaults.headers.common["Authorization"] = token;
      await api.post(`/endereco/${idPessoa}?idPessoa=${idPessoa}`, endereco);
      toast.success("Endereço cadastrado com sucesso!", toastConfig);
      navigate("/PaginaEndereco");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado, tente novamente", toastConfig);
    }
  };

  const [dadosEnderecos, setDadosEnderecos] = useState<IEndereco>();

  const listaEndereco = async () => {
    try {
      nProgress.start();
      api.defaults.headers.common["Authorization"] = token;
      await api
        .get(`/endereco`)
        .then((response) => setDadosEnderecos(response.data.content));
    } catch (error) {
      toast.error("Algo deu errado, tente novamente", toastConfig);
      console.error(error);
    } finally {
      nProgress.done();
    }
  };

  const deleteEndereco = async (id: number) => {
    try {
      nProgress.start();
      api.defaults.headers.common["Authorization"] = token;
      await api.delete(`endereco/${id}`);
      toast.success("Endereço deletado com sucesso!", toastConfig);
    } catch (error) {
      toast.error("Houve algum error, tente novamente!", toastConfig);
      console.log(error);
    } finally {
      nProgress.done();
    }
  };

  const editaEndereco = async (endereco: IEndereco) => {
    try {
      nProgress.start();
      api.defaults.headers.common["Authorization"] = token;
      await api.put(`endereco/${endereco.idEndereco}`, endereco);
      toast.success("Endereço editado com sucesso!!", toastConfig);
      navigate("/PaginaEndereco");
    } catch (error) {
      toast.error("Houve algum error, tente novamente!", toastConfig);
      console.log(error);
    } finally {
      nProgress.done();
    }
  };
  const [listaEnderecos, setListaEnderecos] = useState<IEndereco[]>([]);
  const [totalDePaginas, setTotalDePaginas] = useState(0);

  const enderecoPagination = async (page: string) => {
    try {
      nProgress.start();
      api.defaults.headers.common["Authorization"] = token;
      const { data } = await api.get(
        `endereco?pagina=${parseInt(page) - 1}&tamanhoDasPaginas=20`
      );
      setTotalDePaginas(data.totalDePaginas);
      setListaEnderecos(data.content);
      console.log(totalDePaginas);
    } catch (error) {
      console.error(error);
    } finally {
      nProgress.done();
    }
  };

  return (
    <EnderecoContext.Provider
      value={{
        criaEnderecoPessoa,
        dadosEnderecos,
        listaEndereco,
        deleteEndereco,
        editaEndereco,
        enderecoPagination,
        totalDePaginas,
        listaEnderecos,
      }}
    >
      {children}
    </EnderecoContext.Provider>
  );
};
