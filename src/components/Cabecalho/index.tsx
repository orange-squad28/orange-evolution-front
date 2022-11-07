import style from './Cabecalho.module.css'

function Cabecalho() {
  return (
    <>
      <nav className={style.navigation}>
        <div>
          <img className={style.logo} src="/img/logo-cabecalho.svg"></img>
        </div>

        <ul className={style.nav_options}>
          <li>
            <a className={style.links} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={style.links} href="#">
              Trilhas
            </a>
          </li>
          <li>
            <a className={style.links} href="#">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Cabecalho
