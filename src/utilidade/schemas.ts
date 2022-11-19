import * as yup from 'yup'

export const userFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'O login deve ter no mínimo 3 caractéres'),
  senha: yup
    .string()
    .required('Digite sua senha')
    .min(3, 'A senha deve ter no mínimo 3 caracteres')
})

export const CadastroDePessoasSchema = yup.object().shape({
  nome: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'O login deve ter no mínimo 3 caractéres'),
  dataNascimento: yup.string().required('Selecione uma data de nascimento'),
  cpf: yup.string().required('Digite seu cpf'),

  email: yup.string().required('Digite o seu e-mail')
})

export const ContatoSchema = yup.object().shape({
  tipoContato: yup.string().required('Campo obrigatório'),
  telefone: yup.number().required('Digite o seu telefone'),
  descricao: yup.string().required('Digite uma descrição, exemplo: Whatsapp')
})
