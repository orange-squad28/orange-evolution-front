import Cabecalho from '../Cabecalho'
import Cursos from '../Cursos'
import Trilhas from '../Trilhas'
import style from './Main.module.css'


export default function Main() {
  return (

    <>
     <Cabecalho/>

    <main className={style.wrapper}>
    <img
      className={style.logo}
      src="/img/orangeLogo.png"
      alt="Logo de uma laranja 'derretendo'."
    />

  <div className={style.containerHome}>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
    </div>
    </main>
    </>


  )
}
