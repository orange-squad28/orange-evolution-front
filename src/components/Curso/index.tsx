import styles from './Curso.module.css'

interface CursoProps {
  titulo: string
  id: string
  admin: boolean
}
export default function Curso({ titulo, id, admin }: CursoProps) {
  return (
    <>
      <div className={styles.curso_container}>
        <h5 className={styles.curso_titulo}>{titulo}</h5>

        {admin === false && (
          <div className={styles.curso_conteudo}>
            <a className={styles.curso_link}>Ver conteúdo</a>
            <img
              className={styles.icone}
              src="/img/curso-seta-conteudo.svg"
              alt="seta para ver contaúdo"
            />
          </div>
        )}

        {admin === true && (
          <div className={styles.curso_conteudo_icones}>
            <div className={styles.icones}>
              <img
                src="/img/icone-adicionar.svg"
                alt="botão de adcionar cursos"
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
