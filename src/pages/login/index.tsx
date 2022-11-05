import Cabecalho from 'src/components/Cabecalho'
import style from './../../../styles/Login.module.css'

export default function Login() {
  return (
    <>
      <Cabecalho />
      <div className={style.container}>
        <form className={style.form_login}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" />
          <button>Quero Aprender</button>
          <button>Quero Ensinar</button>
        </form>
      </div>
    </>
  )
}
