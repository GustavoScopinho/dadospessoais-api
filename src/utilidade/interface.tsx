export interface IUsuario {
  login: string
  senha: string
}
export interface IChildren {
  children?: React.ReactNode
}

export interface IusuarioContext {
  CriarNovoUsuario: (novoUsuario: IUsuario) => Promise<void>
  fazerLogin: (usuario: IUsuario) => Promise<void>
  fazerLogout: () => Promise<void>
  token: string
}

export const toastConfig: object = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
}

export interface IPessoas {
  nome: string
  dataNascimento: string
  cpf: string
  email: string
  idPessoa: number
}

export interface IEndereco {
  idPessoa: number,
  tipo: string,
  logradouro: string,
  numero: number,
  complemento: string,
  cep: string,
  cidade: string,
  estado: string,
  pais: string,
  idEndereco: number,
}

export interface IPessoaContext {
  criarDadosPessoa: (people: IPessoas) => Promise<void>
  dadosPessoa: IPessoas | undefined
  buscarDadosPessoa: (people: any) => Promise<void>
  deletarUsuario: (idUsuario: number) => Promise<void>
  editaUsuario: (idUsuario: IPessoas) => Promise<void>
}

export interface IEnderecoContext {
  criaEnderecoPessoa: (endereco: IEndereco, idPessoa: number) => Promise<void>
  listaEndereco: () => Promise<void>
  dadosEnderecos: IEndereco | undefined | any
  deleteEndereco: (id: number) => Promise<void>
  editaEndereco: (endereco: IEndereco) => Promise<void>
}

