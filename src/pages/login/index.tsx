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
          <h1 className={style.aside_login_titulo}>Bem vindo de volta!</h1>
          <p className={style.aside_login_parag}>
            Acesse sua conta agora mesmo
          </p>
          <BotaoGrande texto="Entrar" cor="#01132B" />
        </aside>
        <form className={style.form_login}>
          <Input texto="Nome" tipo="text" icone="name" />
          <Input texto="Email" tipo="email" icone="email" />
          <Input texto="Senha" tipo="password" icone="password" />
          {/* <button className={style.botoes}> Ensinar</button>
          <button className={style.botoes}> Aprender</button> */}
          <BotaoGrande texto="Ensinar" cor="#2B73BF" />
          <BotaoGrande texto="Aprender" cor="#4A49C7" />
        </form>
      </div>
    </>
  )
}
