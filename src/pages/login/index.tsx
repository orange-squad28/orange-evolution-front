import BotaoGrande from 'src/components/Botao-grande'
import Cabecalho from 'src/components/Cabecalho'
import Input from 'src/components/Input'
import style from './Login.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'

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
  } = useForm<Inputs>({ reValidateMode: 'onSubmit' })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Cabecalho />
      <div className={style.container}>
        <aside className={style.aside_login}>
          <div className={style.aside_conteudo}>
            <h1 className={style.aside_login_titulo}>Bem-vindo de volta!</h1>
            <p className={style.aside_login_parag}>
              Acesse sua conta agora mesmo
            </p>
          </div>

          <BotaoGrande texto="Entrar" cor="#01132B" />
        </aside>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form_login}>
          <h1 className={style.form_login_titulo}>
            Cadastre-se e evolua sua carreira na tecnologia
          </h1>
          <div className={style.form_input}>
            <input
              {...register('nome', {
                required: true,
              })}
            />
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
          </div>

          <div className={style.form_botoes}>
            <BotaoGrande texto="Ensinar" cor="#2B73BF" />
            <BotaoGrande texto="Aprender" cor="#4A49C7" />
          </div>
        </form>
      </div>
    </>
  )
}
