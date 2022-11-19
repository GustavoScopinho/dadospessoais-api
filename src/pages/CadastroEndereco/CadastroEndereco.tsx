import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { EnderecoContext } from "../../Context/EnderecoContext";
import { ICep, IEndereco, IEnderecoContext } from "../../utilidade/interface";
import { ContainerCadastro } from "./CadastroEndereco.style";
import InputMask from "react-input-mask";

export const CadastroEndereco = () => {
  const { state } = useLocation();
  console.log(state);
  const { register, handleSubmit } = useForm<IEndereco>();

  const {
    formState: { errors },
    watch,
    setValue,
  } = useForm<ICep>();

  const { criaEnderecoPessoa} = useContext(EnderecoContext);

  const cep = watch("cep");

  // useEffect(() => {
  //   setValue("logradouro", cepApi?.logradouro);
  //   setValue("cidade", cepApi?.localidade);
  //   setValue("estado", cepApi?.uf);
  // }, [cepApi]);

  return (
    <>
      <ContainerCadastro>
        <div className="ContainerMenor">
          <h1>Cadastro de endereço:</h1>
          <div>
            <form
              // onSubmit={handleSubmit((data) =>
              //   console.log(data, state.idPessoa)
              // )}
              onSubmit={handleSubmit((data: IEndereco) =>
                criaEnderecoPessoa(data, state.idPessoa)
              )}
            >
              <p>Tipo do endereço:</p>
              <select id="tipo" {...register("tipo")}>
                <option value="RESIDENCIAL">Residencial</option>
                <option value="COMERCIAL">Comercial</option>
              </select>
              <p>Logradouro:</p>
              <input
                type="text"
                id="logradouro"
                placeholder="Digite o seu logradouro"
                {...register("logradouro")}
              />
              <p>Número</p>
              <input
                type="number"
                id="numero"
                placeholder="Digite o seu número"
                {...register("numero")}
              />
              <p>Complemento</p>
              <input
                type="text"
                id="complemento"
                placeholder="Complemento"
                {...register("complemento")}
              />

              <p>CEP:</p>
              <input
                type="text"
                id="cep"
                placeholder="Cep"
                {...register("cep")}
              />
              {/* <p>CEP:</p>
              <InputMask
                mask="99999-999"
                type="text"
                id="cep"
                placeholder="Cep"
                {...register("cep")}
                onBlur={() => buscaCep(cep)}
              /> */}
              <p>Cidade</p>
              <input
                type="text"
                id="cidade"
                placeholder="Digite sua Cidade"
                {...register("cidade")}
              />
              <p>Estado:</p>
              <input
                type="text"
                id="estado"
                placeholder="Digite seu estado"
                {...register("estado")}
              />
              <p>País:</p>
              <input
                type="text"
                id="pais"
                placeholder="Digite seu estado"
                {...register("pais")}
              />
              <button type="submit" value="Cadastrar">
                Cadastrar Endereço
              </button>
            </form>
          </div>
        </div>
      </ContainerCadastro>
    </>
  );
};
