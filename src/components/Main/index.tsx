import Image from 'next/image';
import Link from 'next/link';
import Cabecalho from '../Cabecalho'
import Carrossel from '../Carousel';
import Cursos from '../Cursos'
import style from './Main.module.css'
import grupoFCamara from "../../../public/img/guproFCamara.jpg"
import playVr from "../../../public/img/playVr.jpg"
import Button from '../Button';
import youtube from "../../../public/img/youtube.png"
import discord from "../../../public/img/discord.png"
import medium from "../../../public/img/medium.png"
import logoOrange from "../../../public/img/logoOrange.png"
import { url } from 'inspector';
import TrilhasMobile from '../Trilhas';
export default function Main() {
  return (
    <>
      <Cabecalho />
      <main className={style.main}>
        <section>
          <div className={style.containerAbout}>
            <div className={style.firstContentChild}>
              <div className={style.contentText}>
                <h2 className={style.h2FirstChild} >SUCO DE LARANJA? O QUE É ISSO?</h2>
                <p className={style.pFirstChild}>A Orange Juice é um grande ecossistema que busca aproximar os amantes da tecnologia interessados em ingressar no mercado de tecnologia. Formamos uma comunidade que produz conteúdos em diversas plataformas e você escolhe seu jeito de aprender!</p>
              </div>
              <div className={style.contentImg}>
                <div className={style.firstImg} role="img" aria-label="uma pessoa sentada emprimeiro plano, já em segundo plano uma pessoa a frente de uma televisão escolhendo algo para assitir, os dois estão de camiseta branca."></div>
                <div className={style.lastImg} role="img" aria-label="Uma pessoa em primeiro plano com um oculos de realidade virtual jogando algo o mesmo esta virado na direção da televisão."></div>
              </div>
            </div>
            <div className={style.lastContentChild}>
              <h2 className={style.h2LastChild}>PROTAGONIZE SUA HISTÓRIA, FAÇA A EVOLUÇÃO LARANJA!</h2>
              <p className={style.pLastChild}>A orange evolution é pra quem procura conteúdo tech de qualidade, é formada por trilhas totalmente gratuitas para que você possa iniciar a sua carreira na tecnologia. Você terá acesso a vídeos, lives, artigos, apostilas e até cursos gratuitos, além desses conteúdos serem da Orange Juice, de parceiros e empresas que confiamos.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className={style.h2CCarrosel}>CONHEÇA NOSSAS TRILHAS GRATUITAS E EXPLORE O CONHECIMENTO AO LADO DE NOSSAS GUIAS!</h2>
          <Carrossel />
          <TrilhasMobile />
        </section>
        <section className={style.sectionSocialMidia}>
          <h2 className={style.tittleSocialMidia}>canais</h2>
          <div className={style.socialMidia}>
            <ul className={style.ulTextMidia}>
              <li className={style.liTextMidia}><p>Site orange juice</p><Button style={{ borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", background: "var(--login-gradient)", fontSize: "1.6rem", width: "20rem", padding: "5px 0" }}>
                <div className={style.imgButton1}>
                </div>
                <Link href="/">
                  <p>Acessar página</p>
                </Link>
              </Button></li>
              <li className={style.liTextMidia}><p>Comunidade orange juice no discord</p> <Button style={{ borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", background: "var(--login-gradient)", fontSize: "1.6rem", width: "20rem", padding: "5px 0" }}>
                <div className={style.imgButton2}>
                </div>
                <Link href="/">
                  <p>Acessar discord</p>
                </Link>
              </Button></li>
              <li className={style.liTextMidia}><p>Canal orange</p><Button style={{ borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", background: "var(--login-gradient)", fontSize: "1.6rem", width: "20rem", padding: "5px 0" }}>
                <div className={style.imgButton3}>
                </div>
                <Link href="/">
                  <p>Acessar no youtube</p>
                </Link>
              </Button></li>
              <li className={style.liTextMidia}><p>Orange medium</p><Button style={{ borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", background: "var(--login-gradient)", fontSize: "1.6rem", width: "20rem", padding: "5px 0" }}>
                <div className={style.imgButton4}>
                </div>
                <Link href="/">
                  <p>Acessar medium</p>
                </Link>
              </Button></li>
            </ul>
          </div>
        </section >
      </main >
    </>
  );

}
