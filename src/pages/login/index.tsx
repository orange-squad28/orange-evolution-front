import BotaoGrande from 'src/components/Botao-grande'
import Cabecalho from 'src/components/Cabecalho'
import Input from 'src/components/Input'
import style from './Login.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import api from 'src/services/api'
import Modal from 'react-modal'
import { useRouter } from 'next/router'

Modal.setAppElement('#__next')
type Inputs = {
  nome: string
  email: string
  senha: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0c1828',
    borderRadius: '20px',
  },
}

export default function Login() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [dadosUsuario, setDadosUsuario] = useState({})
  const [logou, setLogou] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({})

  const onSubmit: SubmitHandler<Inputs> = (valorInputs, evento) => {
    api
      .get('/login', { params: valorInputs })
      .then((resposta) => {
        localStorage.setItem('dadosUsuario', JSON.stringify(resposta.data))
        setLogou(true)
        setDadosUsuario(resposta.data)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    if (logou && dadosUsuario) {
      router.push('/developerCourses')
    }
  }, [dadosUsuario])

  return (
    <>
      <Cabecalho />
      <div className={style.corpo}>
        <div className={style.container}>
          <aside className={style.aside_login}>
            <div className={style.aside_texto}>
              <h1 className={style.aside_login_titulo}>
                Quer fazer parte da nossa comunidade?
              </h1>
              <p className={style.aside_login_parag}>Inicie sua evolução</p>
            </div>

            <BotaoGrande
              texto="Cadastre-se"
              cor="#2B73BF"
              id="login"
              tipo="button"
            />
          </aside>
          <form onSubmit={handleSubmit(onSubmit)} className={style.form_login}>
            <div className={style.container_texto}>
              <h1 className={style.form_login_titulo}>Bem-vindo de volta!</h1>
              <p className={style.form_login_parag}>
                Acesse sua conta agora mesmo.
              </p>
            </div>

            <div className={style.form_input}>
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
              <BotaoGrande
                texto="Entrar"
                cor="#2B73BF"
                id="admin"
                tipo="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
