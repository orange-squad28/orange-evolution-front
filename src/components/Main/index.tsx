import Footer from '../Footer'
import style from './Main.module.css'

export default function Main() {
  return (
    <>
  <main className={style.wrapper}>
      <img
        className={style.logo}
        src="/img/logo_day.png"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />

      <h1>Este é um titulo</h1>

      <h2>
        Este é um projeto simples para iniciar um projeto com Next.JS com
        TypeScript, Styled Components para uso na criação de interfaces e
        aplicativos web.
      </h2>

      <img
        className={style.ilustration}
        src="/img/illustration.svg"
        alt="Uma montanha como caminho para a web"
      />
    </main>
      <Footer/>
    </>
  )
}
