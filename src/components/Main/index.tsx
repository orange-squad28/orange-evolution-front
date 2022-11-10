import Cabecalho from '../Cabecalho'
import Carrossel from '../Carousel';
import Cursos from '../Cursos'
import style from './Main.module.css'
import Button from '../Button/index';
import Carrossel from '../Carousel';


export default function Main() {
  return (
    <>
      <Cabecalho />
      <main className={style.main}>
        <div className={style.containerAbout}>
          <div className={style.firstAChild}>
            <h2 className={style.h2FirstAChild} >SUCO DE LARANJA? O QUE É ISSO?</h2>
            <p className={style.pFirstAChild}>A Orange Juice é um grande ecossistema que busca aproximar os amantes da tecnologia interessados em ingressar no mercado de tecnologia. Formamos uma comunidade que produz conteúdos em diversas plataformas e você escolhe seu jeito de aprender!</p>
          </div>
          <div className={style.lastAChild}>
            <h2 className={style.h2LastAChild}>PROTAGONIZE SUA HISTÓRIA, FAÇA A EVOLUÇÃO LARANJA!</h2>
            <p className={style.pLastAChild}>A orange evolution é pra quem procura conteúdo tech de qualidade, é formada por trilhas totalmente gratuitas para que você possa iniciar a sua carreira na tecnologia. Você terá acesso a vídeos, lives, artigos, apostilas e até cursos gratuitos, além desses conteúdos serem da Orange Juice, de parceiros e empresas que confiamos.
            </p>
          </div>
        </div>
        <div>
          <h2 className={style.h2CCarrosel}>CONHEÇA NOSSAS TRILHAS GRATUITAS E EXPLORE O CONHECIMENTO AO LADO DE NOSSAS GUIAS!</h2>
          <Carrossel />
        </div>  
      </main>
    </>
  );

}
