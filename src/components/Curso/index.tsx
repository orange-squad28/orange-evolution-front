import styles from './Curso.module.css'

interface CursoProps {
  titulo: string
  id: string
  admin: boolean
  link: string
}
export default function Curso({ titulo, id, admin, link }: CursoProps) {
  return (
    <>
      <div className={styles.curso_container}>
        <h5 className={styles.curso_titulo}>{titulo}</h5>

        {admin === false && (
          <div className={styles.curso_conteudo}>
            <a className={styles.curso_link} href={link}>Ver conteúdo</a>
            <a className={styles.curso_link} href={link}>
              <img
                className={styles.icone}
                src="/img/curso-seta-conteudo.svg"
                alt="seta para ver contaúdo"
              />
            </a>
          </div>
        )}

        {admin === true && (
          <div className={styles.curso_conteudo_icones}>
            <div className={styles.icones}>
              <img
                src="/img/icone-adicionar.svg"
                alt="botão de adicionar cursos"
              />
              <img src="/img/icone-seta-cima.svg" alt="seta para cima" />
              <img src="/img/icone-seta-baixo.svg" alt="seta para baixo" />
              <img
                src="/img/icone-lixeira.svg"
                alt="icone de uma lixeira para excluir curso"
              />
            </div>
            <img
              className={styles.icone}
              src="/img/curso-seta-conteudo.svg"
              alt="seta para ver conteúdo"
            />
          </div>
        )}
      </div>
    </>
  )
}
