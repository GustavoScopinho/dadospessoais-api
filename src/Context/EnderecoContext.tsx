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
      await api.get(`/endereco`).then((response) => setDadosEnderecos(response.data.content))
    } catch (error) {
      toast.error("Algo deu errado, tente novamente", toastConfig);
      console.error(error);
    } finally {
      nProgress.done();
    }
  };

  return (
    <EnderecoContext.Provider
      value={{ criaEnderecoPessoa, dadosEnderecos, listaEndereco}}>
      {children}
    </EnderecoContext.Provider>
  );
};
