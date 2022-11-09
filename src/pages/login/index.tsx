import BotaoGrande from 'src/components/Botao-grande'
import Cabecalho from 'src/components/Cabecalho'
import Input from 'src/components/Input'
import style from './Login.module.css'

export default function Login() {
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
        <form className={style.form_login}>
          <h1 className={style.form_login_titulo}>
            Cadastre-se e evolua sua carreira na tecnologia
          </h1>
          <div className={style.form_input}>
            <Input texto="Nome" tipo="text" icone="name" />
            <Input texto="Email" tipo="email" icone="email" />
            <Input texto="Senha" tipo="password" icone="password" />
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
