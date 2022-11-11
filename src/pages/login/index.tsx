import BotaoGrande from 'src/components/Botao-grande'
import Cabecalho from 'src/components/Cabecalho'
import Input from 'src/components/Input'
import style from './Login.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useRef } from 'react'
import axios from 'axios'
import api from 'src/services/api'

type Inputs = {
  nome: string
  email: string
  senha: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({})
  const onSubmit: SubmitHandler<Inputs> = (valorInputs, evento) => {
    // api({ url: '/alunos' }).then(({ data }) => console.log(data))
    // api({
    //   method: 'post',
    //   url: '/alunos',
    //   data: valorInputs,
    // })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.error(error))
    console.log(evento)

    const reqBody = {
      method: 'post',
      url: '',
      data: valorInputs,
    }

    const botaoId = evento?.nativeEvent?.submitter?.id
    if (botaoId === 'admin') {
      reqBody.url = '/admins'
    } else {
      reqBody.url = '/alunos'
    }
    api(reqBody)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  return (
    <>
      <Cabecalho />
      <div className={style.corpo}>
        <div className={style.container}>
          <aside className={style.aside_login}>
            <div className={style.aside_conteudo}>
              <h1 className={style.aside_login_titulo}>Bem-vindo de volta!</h1>
              <p className={style.aside_login_parag}>
                Acesse sua conta agora mesmo
              </p>
            </div>

            <BotaoGrande texto="Entrar" cor="#01132B" id="login" />
          </aside>
          <form onSubmit={handleSubmit(onSubmit)} className={style.form_login}>
            <h1 className={style.form_login_titulo}>
              Cadastre-se e evolua sua carreira na tecnologia
            </h1>
            <div className={style.form_input}>
              {errors.nome && <span></span>}
              <Input
                texto="Nome"
                tipo="text"
                icone="name"
                {...register('nome', {
                  required: true,
                })}
              />
              {errors.nome?.type === 'required' && (
                <span className={style.erro}>O campo nome é obrigatório!</span>
              )}
              <Input
                texto="Email"
                tipo="email"
                icone="email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Esse não é um email válido',
                  },
                })}
              />
              {errors.email && errors.email?.type === 'required' && (
                <span className={style.erro}>O campo email é obrigatório!</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className={style.erro}>{errors.email.message}</span>
              )}

              <Input
                texto="Senha"
                tipo="password"
                icone="password"
                {...register('senha', {
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'A senha deve entre 6 e 12 caracteres',
                  },
                  maxLength: {
                    value: 12,
                    message: 'A senha deve entre 6 e 12 caracteres',
                  },
                })}
              />
              {errors.senha?.type === 'required' && (
                <span className={style.erro}>O campo senha é obrigatório!</span>
              )}
              {errors.senha?.type === 'minLength' && (
                <span className={style.erro}>{errors.senha.message}</span>
              )}
              {errors.senha?.type === 'maxLength' && (
                <span className={style.erro}>{errors.senha.message}</span>
              )}
            </div>

            <div className={style.form_botoes}>
              <BotaoGrande texto="Ensinar" cor="#2B73BF" id="admin" />
              <BotaoGrande texto="Aprender" cor="#4A49C7" id="aluno" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
