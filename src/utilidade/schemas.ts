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

// export const peopleFormSchema = yup.object().shape({
//   nome: yup.string().required()
//   dataNascimento: yup.string().required('')
//   cpf: yup.string().required()
// })
