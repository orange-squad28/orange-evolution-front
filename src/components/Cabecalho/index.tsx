import style from './Cabecalho.module.css'

function Cabecalho() {
  return (
    <>
      <nav className={style.navigation}>
        <div>
          <img className={style.logo} src="/img/orangeLogo.png"></img>
        </div>

        <div className={style.principal}>
          <button className={style.botoes}>Login</button>
          <button className={style.botoes}>Ensine</button>
          <button className={style.botoes}>Aprenda</button>
        </div>
      </nav>
    </>
  )
}

export default Cabecalho
